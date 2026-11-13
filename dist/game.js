(()=>{var _l="170";var Yh=0,ql=1,Zh=2;var nh=1,$h=2,Tn=3,ti=0,Le=1,nn=2,Kn=0,Qn=1,Si=2,Yl=3,Zl=4,Jh=5,vi=100,jh=101,Kh=102,Qh=103,tu=104,eu=200,nu=201,iu=202,su=203,ja=204,Ka=205,ru=206,au=207,ou=208,lu=209,cu=210,hu=211,uu=212,fu=213,du=214,Qa=0,to=1,eo=2,Ki=3,no=4,io=5,so=6,ro=7,ih=0,pu=1,mu=2,mn=0,gu=1,xu=2,vu=3,_u=4,yu=5,Mu=6,bu=7;var sh=300,Qi=301,ts=302,ao=303,oo=304,Wr=306,lo=1e3,Mi=1001,co=1002,Ge=1003,Su=1004;var ks=1005;var fn=1006,ya=1007;var bi=1008;var Pn=1009,rh=1010,ah=1011,Rs=1012,yl=1013,wi=1014,dn=1015,Us=1016,Ml=1017,bl=1018,es=1020,oh=35902,lh=1021,ch=1022,sn=1023,hh=1024,uh=1025,$i=1026,ns=1027,Sl=1028,wl=1029,fh=1030,El=1031;var Tl=1033,mr=33776,gr=33777,xr=33778,vr=33779,ho=35840,uo=35841,fo=35842,po=35843,mo=36196,go=37492,xo=37496,vo=37808,_o=37809,yo=37810,Mo=37811,bo=37812,So=37813,wo=37814,Eo=37815,To=37816,Ao=37817,Ro=37818,Co=37819,Po=37820,Io=37821,_r=36492,Lo=36494,Do=36495,dh=36283,Uo=36284,No=36285,Fo=36286;var yr=2300,zo=2301,Ma=2302,$l=2400,Jl=2401,jl=2402;var wu=3200,Eu=3201;var Tu=0,Au=1,jn="",Je="srgb",si="srgb-linear",Xr="linear",ie="srgb";var Li=7680;var Kl=519,Ru=512,Cu=513,Pu=514,ph=515,Iu=516,Lu=517,Du=518,Uu=519,Ql=35044,ri=35048;var tc="300 es",Rn=2e3,Mr=2001,ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ba=Math.PI/180,Oo=180/Math.PI;function Ns(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Oe(s,t,e){return Math.max(t,Math.min(e,s))}function Nu(s,t){return(s%t+t)%t}function Sa(s,t,e){return(1-e)*s+e*t}function xs(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ze(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var jt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],d=n[8],x=i[0],g=i[3],p=i[6],w=i[1],_=i[4],v=i[7],R=i[2],T=i[5],b=i[8];return r[0]=a*x+o*w+l*R,r[3]=a*g+o*_+l*T,r[6]=a*p+o*v+l*b,r[1]=c*x+h*w+u*R,r[4]=c*g+h*_+u*T,r[7]=c*p+h*v+u*b,r[2]=f*x+m*w+d*R,r[5]=f*g+m*_+d*T,r[8]=f*p+m*v+d*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,d=e*u+n*f+i*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/d;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(o*n-i*a)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wa=new Bt;function mh(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fu(){let s=br("canvas");return s.style.display="block",s}var ec={};function Es(s){s in ec||(ec[s]=!0,console.warn(s))}function zu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ou(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Bu(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:si,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=Ji(s.r),s.g=Ji(s.g),s.b=Ji(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Xr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Cn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ji(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var nc=[.64,.33,.3,.6,.15,.06],ic=[.2126,.7152,.0722],sc=[.3127,.329],rc=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[si]:{primaries:nc,whitePoint:sc,transfer:Xr,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:ic,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:nc,whitePoint:sc,transfer:ie,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:ic,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});var Di,Bo=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Di===void 0&&(Di=br("canvas")),Di.width=t.width,Di.height=t.height;let n=Di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=br("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ku=0,Sr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Ns(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Ea(i[a].image)):r.push(Ea(i[a]))}else r=Ea(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ea(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Bo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Hu=0,We=class s extends ei{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Mi,i=Mi,r=fn,a=bi,o=sn,l=Pn,c=s.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Ns(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lo:t.x=t.x-Math.floor(t.x);break;case Mi:t.x=t.x<0?0:1;break;case co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lo:t.y=t.y-Math.floor(t.y);break;case Mi:t.y=t.y<0?0:1;break;case co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=sh;We.DEFAULT_ANISOTROPY=1;var pe=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],d=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(d-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(d+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(m+1)/2,R=(p+1)/2,T=(h+f)/4,b=(u+x)/4,P=(d+g)/4;return _>v&&_>R?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=T/n,r=b/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=b/r,i=P/r),this.set(n,i,r,e),this}let w=Math.sqrt((g-d)*(g-d)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-d)/w,this.y=(u-x)/w,this.z=(f-h)/w,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ko=class extends ei{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Sr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},In=class extends ko{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wr=class extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ho=class extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ge,this.minFilter=Ge,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=r[a+0],m=r[a+1],d=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=d,t[e+3]=x;return}if(u!==x||l!==f||c!==m||h!==d){let g=1-o,p=l*f+c*m+h*d+u*x,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,p*w);g=Math.sin(g*T)/R,o=Math.sin(o*T)/R}let v=o*w;if(l=l*g+f*v,c=c*g+m*v,h=h*g+d*v,u=u*g+x*v,g===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],m=r[a+2],d=r[a+3];return t[e]=o*d+h*u+l*m-c*f,t[e+1]=l*d+h*f+c*u-o*m,t[e+2]=c*d+h*m+o*f-l*u,t[e+3]=h*d-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),m=l(i/2),d=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*d,this._y=c*m*u-f*h*d,this._z=c*h*d+f*m*u,this._w=c*h*u-f*m*d;break;case"YXZ":this._x=f*h*u+c*m*d,this._y=c*m*u-f*h*d,this._z=c*h*d-f*m*u,this._w=c*h*u+f*m*d;break;case"ZXY":this._x=f*h*u-c*m*d,this._y=c*m*u+f*h*d,this._z=c*h*d+f*m*u,this._w=c*h*u-f*m*d;break;case"ZYX":this._x=f*h*u-c*m*d,this._y=c*m*u+f*h*d,this._z=c*h*d-f*m*u,this._w=c*h*u+f*m*d;break;case"YZX":this._x=f*h*u+c*m*d,this._y=c*m*u+f*h*d,this._z=c*h*d-f*m*u,this._w=c*h*u-f*m*d;break;case"XZY":this._x=f*h*u-c*m*d,this._y=c*m*u-f*h*d,this._z=c*h*d+f*m*u,this._w=c*h*u+f*m*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-i)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(oc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(oc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ta=new O,oc=new gn,Ln=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(r,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),Vs.subVectors(this.max,vs),Ui.subVectors(t.a,vs),Ni.subVectors(t.b,vs),Fi.subVectors(t.c,vs),Xn.subVectors(Ni,Ui),qn.subVectors(Fi,Ni),ui.subVectors(Ui,Fi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-ui.z,ui.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,ui.z,0,-ui.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-ui.y,ui.x,0];return!Aa(e,Ui,Ni,Fi,Vs)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,Ui,Ni,Fi,Vs))?!1:(Gs.crossVectors(Xn,qn),e=[Gs.x,Gs.y,Gs.z],Aa(e,Ui,Ni,Fi,Vs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Mn=[new O,new O,new O,new O,new O,new O,new O,new O],Qe=new O,Hs=new Ln,Ui=new O,Ni=new O,Fi=new O,Xn=new O,qn=new O,ui=new O,vs=new O,Vs=new O,Gs=new O,fi=new O;function Aa(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){fi.fromArray(s,r);let o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Vu=new Ln,_s=new O,Ra=new O,Dn=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Vu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Ra)),this.expandByPoint(_s.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},bn=new O,Ca=new O,Ws=new O,Yn=new O,Pa=new O,Xs=new O,Ia=new O,Cs=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ca.copy(t).add(e).multiplyScalar(.5),Ws.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Ca);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ws),o=Yn.dot(this.direction),l=-Yn.dot(Ws),c=Yn.lengthSq(),h=Math.abs(1-a*a),u,f,m,d;if(h>0)if(u=a*l-o,f=a*o-l,d=r*h,u>=0)if(f>=-d)if(f<=d){let x=1/h;u*=x,f*=x,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-d?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=d?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ca).addScaledVector(Ws,f),m}intersectSphere(t,e){bn.subVectors(t.center,this.origin);let n=bn.dot(this.direction),i=bn.dot(bn)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,r){Pa.subVectors(e,t),Xs.subVectors(n,t),Ia.crossVectors(Pa,Xs);let a=this.direction.dot(Ia),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yn.subVectors(this.origin,t);let l=o*this.direction.dot(Xs.crossVectors(Yn,Xs));if(l<0)return null;let c=o*this.direction.dot(Pa.cross(Yn));if(c<0||l+c>a)return null;let h=-o*Yn.dot(Ia);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,f,m,d,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,f,m,d,x,g)}set(t,e,n,i,r,a,o,l,c,h,u,f,m,d,x,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=m,p[7]=d,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*u,d=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+d*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=d+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,d=c*h,x=c*u;e[0]=f+x*o,e[4]=d*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-d,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,d=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=d+m*o,e[1]=m+d*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*u,d=o*h,x=o*u;e[0]=l*h,e[4]=d*c-m,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=m*c-d,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,d=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=d*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+d,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,m=a*c,d=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=m*u-d,e[2]=d*u-m,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gu,t,Wu)}lookAt(t,e,n){let i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Zn.crossVectors(n,He),Zn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Zn.crossVectors(n,He)),Zn.normalize(),qs.crossVectors(He,Zn),i[0]=Zn.x,i[4]=qs.x,i[8]=He.x,i[1]=Zn.y,i[5]=qs.y,i[9]=He.y,i[2]=Zn.z,i[6]=qs.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],d=n[2],x=n[6],g=n[10],p=n[14],w=n[3],_=n[7],v=n[11],R=n[15],T=i[0],b=i[4],P=i[8],M=i[12],y=i[1],A=i[5],L=i[9],I=i[13],z=i[2],Y=i[6],B=i[10],Z=i[14],H=i[3],tt=i[7],it=i[11],ht=i[15];return r[0]=a*T+o*y+l*z+c*H,r[4]=a*b+o*A+l*Y+c*tt,r[8]=a*P+o*L+l*B+c*it,r[12]=a*M+o*I+l*Z+c*ht,r[1]=h*T+u*y+f*z+m*H,r[5]=h*b+u*A+f*Y+m*tt,r[9]=h*P+u*L+f*B+m*it,r[13]=h*M+u*I+f*Z+m*ht,r[2]=d*T+x*y+g*z+p*H,r[6]=d*b+x*A+g*Y+p*tt,r[10]=d*P+x*L+g*B+p*it,r[14]=d*M+x*I+g*Z+p*ht,r[3]=w*T+_*y+v*z+R*H,r[7]=w*b+_*A+v*Y+R*tt,r[11]=w*P+_*L+v*B+R*it,r[15]=w*M+_*I+v*Z+R*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],d=t[3],x=t[7],g=t[11],p=t[15];return d*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*m-n*l*m)+x*(+e*l*m-e*c*f+r*a*f-i*a*m+i*c*h-r*l*h)+g*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+p*(-i*o*h-e*l*u+e*o*f+i*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],d=t[12],x=t[13],g=t[14],p=t[15],w=u*g*c-x*f*c+x*l*m-o*g*m-u*l*p+o*f*p,_=d*f*c-h*g*c-d*l*m+a*g*m+h*l*p-a*f*p,v=h*x*c-d*u*c+d*o*m-a*x*m-h*o*p+a*u*p,R=d*u*l-h*x*l-d*o*f+a*x*f+h*o*g-a*u*g,T=e*w+n*_+i*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=w*b,t[1]=(x*f*r-u*g*r-x*i*m+n*g*m+u*i*p-n*f*p)*b,t[2]=(o*g*r-x*l*r+x*i*c-n*g*c-o*i*p+n*l*p)*b,t[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*m-n*l*m)*b,t[4]=_*b,t[5]=(h*g*r-d*f*r+d*i*m-e*g*m-h*i*p+e*f*p)*b,t[6]=(d*l*r-a*g*r-d*i*c+e*g*c+a*i*p-e*l*p)*b,t[7]=(a*f*r-h*l*r+h*i*c-e*f*c-a*i*m+e*l*m)*b,t[8]=v*b,t[9]=(d*u*r-h*x*r-d*n*m+e*x*m+h*n*p-e*u*p)*b,t[10]=(a*x*r-d*o*r+d*n*c-e*x*c-a*n*p+e*o*p)*b,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*b,t[12]=R*b,t[13]=(h*x*i-d*u*i+d*n*f-e*x*f-h*n*g+e*u*g)*b,t[14]=(d*o*i-a*x*i-d*n*l+e*x*l+a*n*g-e*o*g)*b,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*f+e*o*f)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,d=r*u,x=a*h,g=a*u,p=o*u,w=l*c,_=l*h,v=l*u,R=n.x,T=n.y,b=n.z;return i[0]=(1-(x+p))*R,i[1]=(m+v)*R,i[2]=(d-_)*R,i[3]=0,i[4]=(m-v)*T,i[5]=(1-(f+p))*T,i[6]=(g+w)*T,i[7]=0,i[8]=(d+_)*b,i[9]=(g-w)*b,i[10]=(1-(f+x))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=zi.set(i[0],i[1],i[2]).length(),a=zi.set(i[4],i[5],i[6]).length(),o=zi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);let c=1/r,h=1/a,u=1/o;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,e.setFromRotationMatrix(tn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Rn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),m,d;if(o===Rn)m=-(a+r)/(a-r),d=-2*a*r/(a-r);else if(o===Mr)m=-a/(a-r),d=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=d,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Rn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(a-r),f=(e+t)*c,m=(n+i)*h,d,x;if(o===Rn)d=(a+r)*u,x=-2*u;else if(o===Mr)d=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-d,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},zi=new O,tn=new se,Gu=new O(0,0,0),Wu=new O(1,1,1),Zn=new O,qs=new O,He=new O,lc=new se,cc=new gn,rn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cc.setFromEuler(this),this.setFromQuaternion(cc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var Er=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Xu=0,hc=new O,Oi=new gn,Sn=new se,Ys=new O,ys=new O,qu=new O,Yu=new gn,uc=new O(1,0,0),fc=new O(0,1,0),dc=new O(0,0,1),pc={type:"added"},Zu={type:"removed"},Bi={type:"childadded",child:null},La={type:"childremoved",child:null},Xe=class s extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new O,e=new rn,n=new gn,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new se},normalMatrix:{value:new Bt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Er,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(uc,t)}rotateY(t){return this.rotateOnAxis(fc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return hc.copy(t).applyQuaternion(this.quaternion),this.position.add(hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uc,t)}translateY(t){return this.translateOnAxis(fc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ys.copy(t):Ys.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ys,Ys,this.up):Sn.lookAt(Ys,ys,this.up),this.quaternion.setFromRotationMatrix(Sn),i&&(Sn.extractRotation(i.matrixWorld),Oi.setFromRotationMatrix(Sn),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zu),La.child=t,this.dispatchEvent(La),La.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Sn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Sn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pc),Bi.child=t,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,qu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),d=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),d.length>0&&(n.nodes=d)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Xe.DEFAULT_UP=new O(0,1,0);Xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var en=new O,wn=new O,Da=new O,En=new O,ki=new O,Hi=new O,mc=new O,Ua=new O,Na=new O,Fa=new O,za=new pe,Oa=new pe,Ba=new pe,_i=class s{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){en.subVectors(i,e),wn.subVectors(n,e),Da.subVectors(t,e);let a=en.dot(en),o=en.dot(wn),l=en.dot(Da),c=wn.dot(wn),h=wn.dot(Da),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,d=(a*h-o*l)*f;return r.set(1-m-d,d,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(a,En.y),l.addScaledVector(o,En.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return za.setScalar(0),Oa.setScalar(0),Ba.setScalar(0),za.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,n),Ba.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(za,r.x),a.addScaledVector(Oa,r.y),a.addScaledVector(Ba,r.z),a}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),wn.subVectors(t,e),en.cross(wn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),en.cross(wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ki.subVectors(i,n),Hi.subVectors(r,n),Ua.subVectors(t,n);let l=ki.dot(Ua),c=Hi.dot(Ua);if(l<=0&&c<=0)return e.copy(n);Na.subVectors(t,i);let h=ki.dot(Na),u=Hi.dot(Na);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ki,a);Fa.subVectors(t,r);let m=ki.dot(Fa),d=Hi.dot(Fa);if(d>=0&&m<=d)return e.copy(r);let x=m*c-l*d;if(x<=0&&c>=0&&d<=0)return o=c/(c-d),e.copy(n).addScaledVector(Hi,o);let g=h*d-m*u;if(g<=0&&u-h>=0&&m-d>=0)return mc.subVectors(r,i),o=(u-h)/(u-h+(m-d)),e.copy(i).addScaledVector(mc,o);let p=1/(g+x+f);return a=x*p,o=f*p,e.copy(n).addScaledVector(ki,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Zs={h:0,s:0,l:0};function ka(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Nt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Zt.workingColorSpace){if(t=Nu(t,1),e=Oe(e,0,1),n=Oe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ka(a,r,t+1/3),this.g=ka(a,r,t),this.b=ka(a,r,t-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=gh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Ji(t.r),this.g=Ji(t.g),this.b=Ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Zt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Oe(Ie.r*255,0,255))*65536+Math.round(Oe(Ie.g*255,0,255))*256+Math.round(Oe(Ie.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ie.copy(this),e);let n=Ie.r,i=Ie.g,r=Ie.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Je){Zt.fromWorkingColorSpace(Ie.copy(this),t);let e=Ie.r,n=Ie.g,i=Ie.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(Zs);let n=Sa($n.h,Zs.h,e),i=Sa($n.s,Zs.s,e),r=Sa($n.l,Zs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ie=new Nt;Nt.NAMES=gh;var $u=0,ni=class extends ei{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Ns(),this.name="",this.blending=Qn,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=Ka,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==Ka&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Un=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ge=new O,$s=new jt,Ot=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ql,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=xs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=xs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=xs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=xs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=xs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ze(e,this.array),n=ze(n,this.array),i=ze(i,this.array),r=ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ql&&(t.usage=this.usage),t}};var Tr=class extends Ot{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ar=class extends Ot{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends Ot{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ju=0,$e=new se,Ha=new Xe,Vi=new O,Ve=new Ln,Ms=new Ln,Se=new O,me=class s extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Ns(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mh(t)?Ar:Tr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Bt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Ve.min,Ms.min),Ve.expandByPoint(Se),Se.addVectors(Ve.max,Ms.max),Ve.expandByPoint(Se)):(Ve.expandByPoint(Ms.min),Ve.expandByPoint(Ms.max))}Ve.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Se.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(t,c),Se.add(Vi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new O,l[P]=new O;let c=new O,h=new O,u=new O,f=new jt,m=new jt,d=new jt,x=new O,g=new O;function p(P,M,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,P),m.fromBufferAttribute(r,M),d.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(f),d.sub(f);let A=1/(m.x*d.y-d.x*m.y);isFinite(A)&&(x.copy(h).multiplyScalar(d.y).addScaledVector(u,-m.y).multiplyScalar(A),g.copy(u).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(A),o[P].add(x),o[M].add(x),o[y].add(x),l[P].add(g),l[M].add(g),l[y].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,M=w.length;P<M;++P){let y=w[P],A=y.start,L=y.count;for(let I=A,z=A+L;I<z;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let _=new O,v=new O,R=new O,T=new O;function b(P){R.fromBufferAttribute(i,P),T.copy(R);let M=o[P];_.copy(M),_.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(T,M);let A=v.dot(l[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,A)}for(let P=0,M=w.length;P<M;++P){let y=w[P],A=y.start,L=y.count;for(let I=A,z=A+L;I<z;I+=3)b(t.getX(I+0)),b(t.getX(I+1)),b(t.getX(I+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let i=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){let d=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);i.fromBufferAttribute(e,d),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,d=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let p=0;p<h;p++)f[d++]=c[m++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},gc=new se,di=new Cs,Js=new Dn,xc=new O,js=new O,Ks=new O,Qs=new O,Va=new O,tr=new O,vc=new O,er=new O,Jt=class extends Xe{constructor(t=new me,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){tr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Va.fromBufferAttribute(u,t),a?tr.addScaledVector(Va,h):tr.addScaledVector(Va.sub(e),h))}e.add(tr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(Js.containsPoint(di.origin)===!1&&(di.intersectSphere(Js,xc)===null||di.origin.distanceToSquared(xc)>(t.far-t.near)**2))&&(gc.copy(r).invert(),di.copy(t.ray).applyMatrix4(gc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){let g=f[d],p=a[g.materialIndex],w=Math.max(g.start,m.start),_=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let v=w,R=_;v<R;v+=3){let T=o.getX(v),b=o.getX(v+1),P=o.getX(v+2);i=nr(this,p,t,n,c,h,u,T,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let d=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let g=d,p=x;g<p;g+=3){let w=o.getX(g),_=o.getX(g+1),v=o.getX(g+2);i=nr(this,a,t,n,c,h,u,w,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,x=f.length;d<x;d++){let g=f[d],p=a[g.materialIndex],w=Math.max(g.start,m.start),_=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let v=w,R=_;v<R;v+=3){let T=v,b=v+1,P=v+2;i=nr(this,p,t,n,c,h,u,T,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let d=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=d,p=x;g<p;g+=3){let w=g,_=g+1,v=g+2;i=nr(this,a,t,n,c,h,u,w,_,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function ju(s,t,e,n,i,r,a,o){let l;if(t.side===Le?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ti,o),l===null)return null;er.copy(o),er.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(er);return c<e.near||c>e.far?null:{distance:c,point:er.clone(),object:s}}function nr(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,js),s.getVertexPosition(l,Ks),s.getVertexPosition(c,Qs);let h=ju(s,t,e,n,js,Ks,Qs,vc);if(h){let u=new O;_i.getBarycoord(vc,js,Ks,Qs,u),i&&(h.uv=_i.getInterpolatedAttribute(i,o,l,c,u,new jt)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,l,c,u,new jt)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};_i.getNormal(js,Ks,Qs,f.normal),h.face=f,h.barycoord=u}return h}var Ei=class s extends me{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;d("z","y","x",-1,-1,n,e,t,a,r,0),d("z","y","x",1,-1,n,e,-t,a,r,1),d("x","z","y",1,1,t,n,e,i,a,2),d("x","z","y",1,-1,t,n,-e,i,a,3),d("x","y","z",1,-1,t,e,n,i,r,4),d("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function d(x,g,p,w,_,v,R,T,b,P,M){let y=v/b,A=R/P,L=v/2,I=R/2,z=T/2,Y=b+1,B=P+1,Z=0,H=0,tt=new O;for(let it=0;it<B;it++){let ht=it*A-I;for(let bt=0;bt<Y;bt++){let xt=bt*y-L;tt[x]=xt*w,tt[g]=ht*_,tt[p]=z,c.push(tt.x,tt.y,tt.z),tt[x]=0,tt[g]=0,tt[p]=T>0?1:-1,h.push(tt.x,tt.y,tt.z),u.push(bt/b),u.push(1-it/P),Z+=1}}for(let it=0;it<P;it++)for(let ht=0;ht<b;ht++){let bt=f+ht+Y*it,xt=f+ht+Y*(it+1),W=f+(ht+1)+Y*(it+1),et=f+(ht+1)+Y*it;l.push(bt,xt,et),l.push(xt,W,et),H+=6}o.addGroup(m,H,M),m+=H,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function is(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(s){let t={};for(let e=0;e<s.length;e++){let n=is(s[e]);for(let i in n)t[i]=n[i]}return t}function Ku(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function xh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Qu={clone:is,merge:Ue},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ue=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=is(t.uniforms),this.uniformsGroups=Ku(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Rr=class extends Xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jn=new O,_c=new jt,yc=new jt,Ne=class extends Rr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Oo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oo*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,_c,yc),e.subVectors(yc,_c)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ba*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Gi=-90,Wi=1,Vo=class extends Xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ne(Gi,Wi,t,e);i.layers=this.layers,this.add(i);let r=new Ne(Gi,Wi,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Gi,Wi,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Gi,Wi,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Gi,Wi,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Gi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Cr=class extends We{constructor(t,e,n,i,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Go=class extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ei(5,5,5),r=new ue({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:Kn});r.uniforms.tEquirect.value=e;let a=new Jt(i,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=fn),new Vo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Ga=new O,nf=new O,sf=new Bt,An=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Ga.subVectors(n,e).cross(nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ga),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sf.getNormalMatrix(t),i=this.coplanarPoint(Ga).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},pi=new Dn,ir=new O,Pr=class{constructor(t=new An,e=new An,n=new An,i=new An,r=new An,a=new An){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){let n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],d=i[9],x=i[10],g=i[11],p=i[12],w=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-r,f-c,g-m,v-p).normalize(),n[1].setComponents(l+r,f+c,g+m,v+p).normalize(),n[2].setComponents(l+a,f+h,g+d,v+w).normalize(),n[3].setComponents(l-a,f-h,g-d,v-w).normalize(),n[4].setComponents(l-o,f-u,g-x,v-_).normalize(),e===Rn)n[5].setComponents(l+o,f+u,g+x,v+_).normalize();else if(e===Mr)n[5].setComponents(o,u,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(t){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ir.x=i.normal.x>0?t.max.x:t.min.x,ir.y=i.normal.y>0?t.max.y:t.min.y,ir.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vh(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function rf(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=s.SHORT;else if(c instanceof Uint32Array)m=s.UNSIGNED_INT;else if(c instanceof Int32Array)m=s.INT;else if(c instanceof Int8Array)m=s.BYTE;else if(c instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((m,d)=>m.start-d.start);let f=0;for(let m=1;m<u.length;m++){let d=u[f],x=u[m];x.start<=d.start+d.count+1?d.count=Math.max(d.count,x.start+x.count-d.start):(++f,u[f]=x)}u.length=f+1;for(let m=0,d=u.length;m<d;m++){let x=u[m];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var ii=class s extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,f=e/l,m=[],d=[],x=[],g=[];for(let p=0;p<h;p++){let w=p*f-a;for(let _=0;_<c;_++){let v=_*u-r;d.push(v,-w,0),x.push(0,0,1),g.push(_/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let _=w+c*p,v=w+c*(p+1),R=w+1+c*(p+1),T=w+1+c*p;m.push(_,v,T),m.push(v,R,T)}this.setIndex(m),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,of=`#ifdef USE_ALPHAHASH
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
#endif`,lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
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
#endif`,df=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pf=`#ifdef USE_BATCHING
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
#endif`,mf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_f=`#ifdef USE_IRIDESCENCE
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
#endif`,yf=`#ifdef USE_BUMPMAP
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
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ef=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cf=`#define PI 3.141592653589793
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
} // validated`,Pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,If=`vec3 transformedNormal = objectNormal;
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
#endif`,Lf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
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
}`,Zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
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
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,id=`PhysicalMaterial material;
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
#endif`,sd=`struct PhysicalMaterial {
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
}`,rd=`
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,md=`#if defined( USE_POINTS_UV )
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
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_d=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Md=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ed=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ld=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Od=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wd=`float getShadowMask() {
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
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,$d=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,dp=`#define DISTANCE
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
}`,pp=`#define DISTANCE
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`uniform float scale;
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
}`,vp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,yp=`uniform vec3 diffuse;
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
}`,Mp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,Sp=`#define MATCAP
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
}`,wp=`#define MATCAP
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
}`,Ep=`#define NORMAL
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
}`,Tp=`#define NORMAL
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
}`,Ap=`#define PHONG
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define STANDARD
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
}`,Pp=`#define STANDARD
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
}`,Ip=`#define TOON
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
}`,Lp=`#define TOON
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
}`,Dp=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Np=`#include <common>
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
}`,Fp=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Op=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:af,alphahash_pars_fragment:of,alphamap_fragment:lf,alphamap_pars_fragment:cf,alphatest_fragment:hf,alphatest_pars_fragment:uf,aomap_fragment:ff,aomap_pars_fragment:df,batching_pars_vertex:pf,batching_vertex:mf,begin_vertex:gf,beginnormal_vertex:xf,bsdfs:vf,iridescence_fragment:_f,bumpmap_pars_fragment:yf,clipping_planes_fragment:Mf,clipping_planes_pars_fragment:bf,clipping_planes_pars_vertex:Sf,clipping_planes_vertex:wf,color_fragment:Ef,color_pars_fragment:Tf,color_pars_vertex:Af,color_vertex:Rf,common:Cf,cube_uv_reflection_fragment:Pf,defaultnormal_vertex:If,displacementmap_pars_vertex:Lf,displacementmap_vertex:Df,emissivemap_fragment:Uf,emissivemap_pars_fragment:Nf,colorspace_fragment:Ff,colorspace_pars_fragment:zf,envmap_fragment:Of,envmap_common_pars_fragment:Bf,envmap_pars_fragment:kf,envmap_pars_vertex:Hf,envmap_physical_pars_fragment:Kf,envmap_vertex:Vf,fog_vertex:Gf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:Jf,lights_pars_begin:jf,lights_toon_fragment:Qf,lights_toon_pars_fragment:td,lights_phong_fragment:ed,lights_phong_pars_fragment:nd,lights_physical_fragment:id,lights_physical_pars_fragment:sd,lights_fragment_begin:rd,lights_fragment_maps:ad,lights_fragment_end:od,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:ud,map_fragment:fd,map_pars_fragment:dd,map_particle_fragment:pd,map_particle_pars_fragment:md,metalnessmap_fragment:gd,metalnessmap_pars_fragment:xd,morphinstance_vertex:vd,morphcolor_vertex:_d,morphnormal_vertex:yd,morphtarget_pars_vertex:Md,morphtarget_vertex:bd,normal_fragment_begin:Sd,normal_fragment_maps:wd,normal_pars_fragment:Ed,normal_pars_vertex:Td,normal_vertex:Ad,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Pd,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Ld,opaque_fragment:Dd,packing:Ud,premultiplied_alpha_fragment:Nd,project_vertex:Fd,dithering_fragment:zd,dithering_pars_fragment:Od,roughnessmap_fragment:Bd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Hd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Gd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:Zd,specularmap_fragment:$d,specularmap_pars_fragment:Jd,tonemapping_fragment:jd,tonemapping_pars_fragment:Kd,transmission_fragment:Qd,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,worldpos_vertex:sp,background_vert:rp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:lp,cube_vert:cp,cube_frag:hp,depth_vert:up,depth_frag:fp,distanceRGBA_vert:dp,distanceRGBA_frag:pp,equirect_vert:mp,equirect_frag:gp,linedashed_vert:xp,linedashed_frag:vp,meshbasic_vert:_p,meshbasic_frag:yp,meshlambert_vert:Mp,meshlambert_frag:bp,meshmatcap_vert:Sp,meshmatcap_frag:wp,meshnormal_vert:Ep,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:Rp,meshphysical_vert:Cp,meshphysical_frag:Pp,meshtoon_vert:Ip,meshtoon_frag:Lp,points_vert:Dp,points_frag:Up,shadow_vert:Np,shadow_frag:Fp,sprite_vert:zp,sprite_frag:Op},ut={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},un={basic:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ue([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ue([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ue([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ue([ut.points,ut.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ue([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ue([ut.common,ut.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ue([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ue([ut.sprite,ut.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ue([ut.common,ut.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ue([ut.lights,ut.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};un.physical={uniforms:Ue([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var sr={r:0,b:0,g:0},mi=new rn,Bp=new se;function kp(s,t,e,n,i,r,a){let o=new Nt(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function d(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?e:t).get(_)),_}function x(w){let _=!1,v=d(w);v===null?p(o,l):v&&v.isColor&&(p(v,1),_=!0);let R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(w,_){let v=d(_);v&&(v.isCubeTexture||v.mapping===Wr)?(h===void 0&&(h=new Jt(new Ei(1,1,1),new ue({name:"BackgroundCubeMaterial",uniforms:is(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),mi.copy(_.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(mi)),h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ie,(u!==v||f!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,m=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Jt(new ii(2,2),new ue({name:"BackgroundMaterial",uniforms:is(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,m=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,_){w.getRGB(sr,xh(s)),n.buffers.color.setClear(sr.r,sr.g,sr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(w,_=1){o.set(w),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(o,l)},render:x,addToRenderList:g}}function Hp(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(y,A,L,I,z){let Y=!1,B=u(I,L,A);r!==B&&(r=B,c(r.object)),Y=m(y,I,L,z),Y&&d(y,I,L,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(y,A,L,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,A,L){let I=L.wireframe===!0,z=n[y.id];z===void 0&&(z={},n[y.id]=z);let Y=z[A.id];Y===void 0&&(Y={},z[A.id]=Y);let B=Y[I];return B===void 0&&(B=f(l()),Y[I]=B),B}function f(y){let A=[],L=[],I=[];for(let z=0;z<e;z++)A[z]=0,L[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:I,object:y,attributes:{},index:null}}function m(y,A,L,I){let z=r.attributes,Y=A.attributes,B=0,Z=L.getAttributes();for(let H in Z)if(Z[H].location>=0){let it=z[H],ht=Y[H];if(ht===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor)),it===void 0||it.attribute!==ht||ht&&it.data!==ht.data)return!0;B++}return r.attributesNum!==B||r.index!==I}function d(y,A,L,I){let z={},Y=A.attributes,B=0,Z=L.getAttributes();for(let H in Z)if(Z[H].location>=0){let it=Y[H];it===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(it=y.instanceColor));let ht={};ht.attribute=it,it&&it.data&&(ht.data=it.data),z[H]=ht,B++}r.attributes=z,r.attributesNum=B,r.index=I}function x(){let y=r.newAttributes;for(let A=0,L=y.length;A<L;A++)y[A]=0}function g(y){p(y,0)}function p(y,A){let L=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;L[y]=1,I[y]===0&&(s.enableVertexAttribArray(y),I[y]=1),z[y]!==A&&(s.vertexAttribDivisor(y,A),z[y]=A)}function w(){let y=r.newAttributes,A=r.enabledAttributes;for(let L=0,I=A.length;L<I;L++)A[L]!==y[L]&&(s.disableVertexAttribArray(L),A[L]=0)}function _(y,A,L,I,z,Y,B){B===!0?s.vertexAttribIPointer(y,A,L,z,Y):s.vertexAttribPointer(y,A,L,I,z,Y)}function v(y,A,L,I){x();let z=I.attributes,Y=L.getAttributes(),B=A.defaultAttributeValues;for(let Z in Y){let H=Y[Z];if(H.location>=0){let tt=z[Z];if(tt===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(tt=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(tt=y.instanceColor)),tt!==void 0){let it=tt.normalized,ht=tt.itemSize,bt=t.get(tt);if(bt===void 0)continue;let xt=bt.buffer,W=bt.type,et=bt.bytesPerElement,gt=W===s.INT||W===s.UNSIGNED_INT||tt.gpuType===yl;if(tt.isInterleavedBufferAttribute){let ct=tt.data,Et=ct.stride,It=tt.offset;if(ct.isInstancedInterleavedBuffer){for(let Pt=0;Pt<H.locationSize;Pt++)p(H.location+Pt,ct.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Pt=0;Pt<H.locationSize;Pt++)g(H.location+Pt);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let Pt=0;Pt<H.locationSize;Pt++)_(H.location+Pt,ht/H.locationSize,W,it,Et*et,(It+ht/H.locationSize*Pt)*et,gt)}else{if(tt.isInstancedBufferAttribute){for(let ct=0;ct<H.locationSize;ct++)p(H.location+ct,tt.meshPerAttribute);y.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<H.locationSize;ct++)g(H.location+ct);s.bindBuffer(s.ARRAY_BUFFER,xt);for(let ct=0;ct<H.locationSize;ct++)_(H.location+ct,ht/H.locationSize,W,it,ht*et,ht/H.locationSize*ct*et,gt)}}else if(B!==void 0){let it=B[Z];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(H.location,it);break;case 3:s.vertexAttrib3fv(H.location,it);break;case 4:s.vertexAttrib4fv(H.location,it);break;default:s.vertexAttrib1fv(H.location,it)}}}}w()}function R(){P();for(let y in n){let A=n[y];for(let L in A){let I=A[L];for(let z in I)h(I[z].object),delete I[z];delete A[L]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let L in A){let I=A[L];for(let z in I)h(I[z].object),delete I[z];delete A[L]}delete n[y.id]}function b(y){for(let A in n){let L=n[A];if(L[y.id]===void 0)continue;let I=L[y.id];for(let z in I)h(I[z].object),delete I[z];delete L[y.id]}}function P(){M(),a=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function Vp(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let d=0;d<u;d++)m+=h[d];e.update(m,n,1)}function l(c,h,u,f){if(u===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<c.length;d++)a(c[d],h[d],f[d]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x]*f[x];e.update(d,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(b){return!(b!==sn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let P=b===Us&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Pn&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==dn&&!P)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:d,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function Wp(s){let t=this,e=null,n=0,i=!1,r=!1,a=new An,o=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let d=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,p=s.get(u);if(!i||d===null||d.length===0||r&&!g)r?h(null):c();else{let w=r?0:n,_=w*4,v=p.clippingState||null;l.value=v,v=h(d,f,_,m);for(let R=0;R!==_;++R)v[R]=e[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,d){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,d!==!0||g===null){let p=m+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=m;_!==x;++_,v+=4)a.copy(u[_]).applyMatrix4(w,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Xp(s){let t=new WeakMap;function e(a,o){return o===ao?a.mapping=Qi:o===oo&&(a.mapping=ts),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ao||o===oo)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Go(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wo=class extends Rr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yi=4,Mc=[.125,.215,.35,.446,.526,.582],yi=20,Wa=new Wo,bc=new Nt,Xa=null,qa=0,Ya=0,Za=!1,xi=(1+Math.sqrt(5))/2,Xi=1/xi,Sc=[new O(-xi,Xi,0),new O(xi,Xi,0),new O(-Xi,0,xi),new O(Xi,0,xi),new O(0,xi,-Xi),new O(0,xi,Xi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Ir=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,Ya),this._renderer.xr.enabled=Za,t.scissorTest=!1,rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),Za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Us,format:sn,colorSpace:si,depthBuffer:!1},i=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=Yp(r,t,e)}return i}_compileMaterial(t){let e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,Wa)}_sceneToCubeUV(t,e,n,i){let o=new Ne(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(bc),h.toneMapping=mn,h.autoClear=!1;let m=new Un({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),d=new Jt(new Ei,m),x=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,x=!0):(m.color.copy(bc),x=!0);for(let p=0;p<6;p++){let w=p%3;w===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):w===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;rr(i,w*_,p>2?_:0,_,_),h.setRenderTarget(i),x&&h.render(d,o),h.render(t,o)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Qi||t.mapping===ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;rr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Wa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sc[(i-r-1)%Sc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Jt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*yi-1),x=r/d,g=isFinite(r)?1+Math.floor(h*x):yi;g>yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yi}`);let p=[],w=0;for(let b=0;b<yi;++b){let P=b/x,M=Math.exp(-P*P/2);p.push(M),b===0?w+=M:b<g&&(w+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:_}=this;f.dTheta.value=d,f.mipInt.value=_-n;let v=this._sizeLods[i],R=3*v*(i>_-Yi?i-_+Yi:0),T=4*(this._cubeSize-v);rr(e,R,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Wa)}};function qp(s){let t=[],e=[],n=[],i=s,r=s-Yi+1+Mc.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Yi?l=Mc[a-s+Yi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,d=6,x=3,g=2,p=1,w=new Float32Array(x*d*m),_=new Float32Array(g*d*m),v=new Float32Array(p*d*m);for(let T=0;T<m;T++){let b=T%3*2/3-1,P=T>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];w.set(M,x*d*T),_.set(f,g*d*T);let y=[T,T,T,T,T,T];v.set(y,p*d*T)}let R=new me;R.setAttribute("position",new Ot(w,x)),R.setAttribute("uv",new Ot(_,g)),R.setAttribute("faceIndex",new Ot(v,p)),t.push(R),i>Yi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(s,t,e){let n=new In(s,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yp(s,t,e){let n=new Float32Array(yi),i=new O(0,1,0);return new ue({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ec(){return new ue({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Tc(){return new ue({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Al(){return`

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
	`}function Zp(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ao||l===oo,h=l===Qi||l===ts;if(c||h){let u=t.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Ir(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let m=o.image;return c&&m&&m.height>0||h&&m&&i(m)?(e===null&&(e=new Ir(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function $p(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Jp(s,t,e,n){let i={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let d in f.attributes)t.remove(f.attributes[d]);for(let d in f.morphAttributes){let x=f.morphAttributes[d];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}f.removeEventListener("dispose",a),delete i[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],s.ARRAY_BUFFER);let m=u.morphAttributes;for(let d in m){let x=m[d];for(let g=0,p=x.length;g<p;g++)t.update(x[g],s.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,d=u.attributes.position,x=0;if(m!==null){let w=m.array;x=m.version;for(let _=0,v=w.length;_<v;_+=3){let R=w[_+0],T=w[_+1],b=w[_+2];f.push(R,T,T,b,b,R)}}else if(d!==void 0){let w=d.array;x=d.version;for(let _=0,v=w.length/3-1;_<v;_+=3){let R=_+0,T=_+1,b=_+2;f.push(R,T,T,b,b,R)}}else return;let g=new(mh(f)?Ar:Tr)(f,1);g.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jp(s,t,e){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){s.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,d){d!==0&&(s.drawElementsInstanced(n,m,r,f*a,d),e.update(m,n,d))}function h(f,m,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,d);let g=0;for(let p=0;p<d;p++)g+=m[p];e.update(g,n,1)}function u(f,m,d,x){if(d===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/a,m[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,x,0,d);let p=0;for(let w=0;w<d;w++)p+=m[w]*x[w];e.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kp(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qp(s,t,e){let n=new WeakMap,i=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],_=0;m===!0&&(_=1),d===!0&&(_=2),x===!0&&(_=3);let v=o.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*R*4*u),b=new wr(T,v,R,u);b.type=dn,b.needsUpdate=!0;let P=_*4;for(let y=0;y<u;y++){let A=g[y],L=p[y],I=w[y],z=v*R*4*y;for(let Y=0;Y<A.count;Y++){let B=Y*P;m===!0&&(i.fromBufferAttribute(A,Y),T[z+B+0]=i.x,T[z+B+1]=i.y,T[z+B+2]=i.z,T[z+B+3]=0),d===!0&&(i.fromBufferAttribute(L,Y),T[z+B+4]=i.x,T[z+B+5]=i.y,T[z+B+6]=i.z,T[z+B+7]=0),x===!0&&(i.fromBufferAttribute(I,Y),T[z+B+8]=i.x,T[z+B+9]=i.y,T[z+B+10]=i.z,T[z+B+11]=I.itemSize===4?i.w:1)}}f={count:u,texture:b,size:new jt(v,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let d=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(s,"morphTargetBaseInfluence",d),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function tm(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Lr=class extends We{constructor(t,e,n,i,r,a,o,l,c,h=$i){if(h!==$i&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=wi),n===void 0&&h===ns&&(n=es),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ge,this.minFilter=l!==void 0?l:Ge,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},_h=new We,Ac=new Lr(1,1),yh=new wr,Mh=new Ho,bh=new Cr,Rc=[],Cc=[],Pc=new Float32Array(16),Ic=new Float32Array(9),Lc=new Float32Array(4);function as(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Rc[i];if(r===void 0&&(r=new Float32Array(i),Rc[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Me(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function be(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function qr(s,t){let e=Cc[t];e===void 0&&(e=new Int32Array(t),Cc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function em(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2fv(this.addr,t),be(e,t)}}function im(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;s.uniform3fv(this.addr,t),be(e,t)}}function sm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4fv(this.addr,t),be(e,t)}}function rm(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Lc.set(n),s.uniformMatrix2fv(this.addr,!1,Lc),be(e,n)}}function am(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Ic.set(n),s.uniformMatrix3fv(this.addr,!1,Ic),be(e,n)}}function om(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Me(e,n))return;Pc.set(n),s.uniformMatrix4fv(this.addr,!1,Pc),be(e,n)}}function lm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function cm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2iv(this.addr,t),be(e,t)}}function hm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3iv(this.addr,t),be(e,t)}}function um(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4iv(this.addr,t),be(e,t)}}function fm(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function dm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;s.uniform2uiv(this.addr,t),be(e,t)}}function pm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Me(e,t))return;s.uniform3uiv(this.addr,t),be(e,t)}}function mm(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;s.uniform4uiv(this.addr,t),be(e,t)}}function gm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ac.compareFunction=ph,r=Ac):r=_h,e.setTexture2D(t||r,i)}function xm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Mh,i)}function vm(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bh,i)}function _m(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||yh,i)}function ym(s){switch(s){case 5126:return em;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return fm;case 36294:return dm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return vm;case 36289:case 36303:case 36311:case 36292:return _m}}function Mm(s,t){s.uniform1fv(this.addr,t)}function bm(s,t){let e=as(t,this.size,2);s.uniform2fv(this.addr,e)}function Sm(s,t){let e=as(t,this.size,3);s.uniform3fv(this.addr,e)}function wm(s,t){let e=as(t,this.size,4);s.uniform4fv(this.addr,e)}function Em(s,t){let e=as(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Tm(s,t){let e=as(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Am(s,t){let e=as(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Rm(s,t){s.uniform1iv(this.addr,t)}function Cm(s,t){s.uniform2iv(this.addr,t)}function Pm(s,t){s.uniform3iv(this.addr,t)}function Im(s,t){s.uniform4iv(this.addr,t)}function Lm(s,t){s.uniform1uiv(this.addr,t)}function Dm(s,t){s.uniform2uiv(this.addr,t)}function Um(s,t){s.uniform3uiv(this.addr,t)}function Nm(s,t){s.uniform4uiv(this.addr,t)}function Fm(s,t,e){let n=this.cache,i=t.length,r=qr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||_h,r[a])}function zm(s,t,e){let n=this.cache,i=t.length,r=qr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Mh,r[a])}function Om(s,t,e){let n=this.cache,i=t.length,r=qr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||bh,r[a])}function Bm(s,t,e){let n=this.cache,i=t.length,r=qr(e,i);Me(n,r)||(s.uniform1iv(this.addr,r),be(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||yh,r[a])}function km(s){switch(s){case 5126:return Mm;case 35664:return bm;case 35665:return Sm;case 35666:return wm;case 35674:return Em;case 35675:return Tm;case 35676:return Am;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Pm;case 35669:case 35673:return Im;case 5125:return Lm;case 36294:return Dm;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Bm}}var Xo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ym(e.type)}},qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=km(e.type)}},Yo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},$a=/(\w+)(\])?(\[|\.)?/g;function Dc(s,t){s.seq.push(t),s.map[t.id]=t}function Hm(s,t,e){let n=s.name,i=n.length;for($a.lastIndex=0;;){let r=$a.exec(n),a=$a.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Dc(e,c===void 0?new Xo(o,s,t):new qo(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Yo(o),Dc(e,u)),e=u}}}var ji=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Hm(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Uc(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var Vm=37297,Gm=0;function Wm(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Nc=new Bt;function Xm(s){Zt._getMatrix(Nc,Zt.workingColorSpace,s);let t=`mat3( ${Nc.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(s)){case Xr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Fc(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Wm(s.getShaderSource(t),a)}else return i}function qm(s,t){let e=Xm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ym(s,t){let e;switch(t){case gu:e="Linear";break;case xu:e="Reinhard";break;case vu:e="Cineon";break;case _u:e="ACESFilmic";break;case Mu:e="AgX";break;case bu:e="Neutral";break;case yu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ar=new O;function Zm(){Zt.getLuminanceCoefficients(ar);let s=ar.x.toFixed(4),t=ar.y.toFixed(4),e=ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function Jm(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jm(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Ts(s){return s!==""}function zc(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zo(s){return s.replace(Km,t0)}var Qm=new Map;function t0(s,t){let e=Ht[t];if(e===void 0){let n=Qm.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zo(e)}var e0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(s){return s.replace(e0,n0)}function n0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kc(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function i0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===nh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function s0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function r0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function a0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ih:t="ENVMAP_BLENDING_MULTIPLY";break;case pu:t="ENVMAP_BLENDING_MIX";break;case mu:t="ENVMAP_BLENDING_ADD";break}return t}function o0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l0(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=i0(e),c=s0(e),h=r0(e),u=a0(e),f=o0(e),m=$m(e),d=Jm(r),x=i.createProgram(),g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ts).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(g=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==mn?Ym("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,qm("linearToOutputTexel",e.outputColorSpace),Zm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ts).join(`
`)),a=Zo(a),a=zc(a,e),a=Oc(a,e),o=Zo(o),o=zc(o,e),o=Oc(o,e),a=Bc(a),o=Bc(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===tc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=w+g+a,v=w+p+o,R=Uc(i,i.VERTEX_SHADER,_),T=Uc(i,i.FRAGMENT_SHADER,v);i.attachShader(x,R),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function b(A){if(s.debug.checkShaderErrors){let L=i.getProgramInfoLog(x).trim(),I=i.getShaderInfoLog(R).trim(),z=i.getShaderInfoLog(T).trim(),Y=!0,B=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,R,T);else{let Z=Fc(i,R,"vertex"),H=Fc(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+Z+`
`+H)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(I===""||z==="")&&(B=!1);B&&(A.diagnostics={runnable:Y,programLog:L,vertexShader:{log:I,prefix:g},fragmentShader:{log:z,prefix:p}})}i.deleteShader(R),i.deleteShader(T),P=new ji(i,x),M=jm(i,x)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,Vm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gm++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=T,this}var c0=0,$o=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Jo(t),e.set(t,n)),n}},Jo=class{constructor(t){this.id=c0++,this.code=t,this.usedTimes=0}};function h0(s,t,e,n,i,r,a){let o=new Er,l=new $o,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,m=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,y,A,L,I){let z=L.fog,Y=I.geometry,B=M.isMeshStandardMaterial?L.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),H=Z&&Z.mapping===Wr?Z.image.height:null,tt=d[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let it=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=it!==void 0?it.length:0,bt=0;Y.morphAttributes.position!==void 0&&(bt=1),Y.morphAttributes.normal!==void 0&&(bt=2),Y.morphAttributes.color!==void 0&&(bt=3);let xt,W,et,gt;if(tt){let $t=un[tt];xt=$t.vertexShader,W=$t.fragmentShader}else xt=M.vertexShader,W=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),gt=l.getFragmentShaderID(M);let ct=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),It=I.isInstancedMesh===!0,Pt=I.isBatchedMesh===!0,Qt=!!M.map,kt=!!M.matcap,re=!!Z,F=!!M.aoMap,Te=!!M.lightMap,Vt=!!M.bumpMap,Gt=!!M.normalMap,Ct=!!M.displacementMap,ne=!!M.emissiveMap,Rt=!!M.metalnessMap,C=!!M.roughnessMap,S=M.anisotropy>0,V=M.clearcoat>0,j=M.dispersion>0,Q=M.iridescence>0,J=M.sheen>0,st=M.transmission>0,k=S&&!!M.anisotropyMap,rt=V&&!!M.clearcoatMap,Tt=V&&!!M.clearcoatNormalMap,nt=V&&!!M.clearcoatRoughnessMap,dt=Q&&!!M.iridescenceMap,yt=Q&&!!M.iridescenceThicknessMap,At=J&&!!M.sheenColorMap,mt=J&&!!M.sheenRoughnessMap,zt=!!M.specularMap,Lt=!!M.specularColorMap,Xt=!!M.specularIntensityMap,D=st&&!!M.transmissionMap,lt=st&&!!M.thicknessMap,$=!!M.gradientMap,K=!!M.alphaMap,pt=M.alphaTest>0,ft=!!M.alphaHash,Ut=!!M.extensions,ae=mn;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ae=s.toneMapping);let _e={shaderID:tt,shaderType:M.type,shaderName:M.name,vertexShader:xt,fragmentShader:W,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Pt,batchingColor:Pt&&I._colorsTexture!==null,instancing:It,instancingColor:It&&I.instanceColor!==null,instancingMorph:It&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:si,alphaToCoverage:!!M.alphaToCoverage,map:Qt,matcap:kt,envMap:re,envMapMode:re&&Z.mapping,envMapCubeUVHeight:H,aoMap:F,lightMap:Te,bumpMap:Vt,normalMap:Gt,displacementMap:f&&Ct,emissiveMap:ne,normalMapObjectSpace:Gt&&M.normalMapType===Au,normalMapTangentSpace:Gt&&M.normalMapType===Tu,metalnessMap:Rt,roughnessMap:C,anisotropy:S,anisotropyMap:k,clearcoat:V,clearcoatMap:rt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:Q,iridescenceMap:dt,iridescenceThicknessMap:yt,sheen:J,sheenColorMap:At,sheenRoughnessMap:mt,specularMap:zt,specularColorMap:Lt,specularIntensityMap:Xt,transmission:st,transmissionMap:D,thicknessMap:lt,gradientMap:$,opaque:M.transparent===!1&&M.blending===Qn&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:pt,alphaHash:ft,combine:M.combine,mapUv:Qt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:Te&&x(M.lightMap.channel),bumpMapUv:Vt&&x(M.bumpMap.channel),normalMapUv:Gt&&x(M.normalMap.channel),displacementMapUv:Ct&&x(M.displacementMap.channel),emissiveMapUv:ne&&x(M.emissiveMap.channel),metalnessMapUv:Rt&&x(M.metalnessMap.channel),roughnessMapUv:C&&x(M.roughnessMap.channel),anisotropyMapUv:k&&x(M.anisotropyMap.channel),clearcoatMapUv:rt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:At&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:mt&&x(M.sheenRoughnessMap.channel),specularMapUv:zt&&x(M.specularMap.channel),specularColorMapUv:Lt&&x(M.specularColorMap.channel),specularIntensityMapUv:Xt&&x(M.specularIntensityMap.channel),transmissionMapUv:D&&x(M.transmissionMap.channel),thicknessMapUv:lt&&x(M.thicknessMap.channel),alphaMapUv:K&&x(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Gt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Y.attributes.uv&&(Qt||K),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Et,skinning:I.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:ae,decodeVideoTexture:Qt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:ne&&M.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===nn,flipSided:M.side===Le,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ut&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&M.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function p(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)y.push(A),y.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(w(y,M),_(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function w(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function _(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){let y=d[M.type],A;if(y){let L=un[y];A=Qu.clone(L.uniforms)}else A=M.uniforms;return A}function R(M,y){let A;for(let L=0,I=h.length;L<I;L++){let z=h[L];if(z.cacheKey===y){A=z,++A.usedTimes;break}}return A===void 0&&(A=new l0(s,y,M,r),h.push(A)),A}function T(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:P}}function u0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function f0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Hc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vc(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,f,m,d,x,g){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:m,groupOrder:d,renderOrder:u.renderOrder,z:x,group:g},s[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=m,p.groupOrder=d,p.renderOrder=u.renderOrder,p.z=x,p.group=g),t++,p}function o(u,f,m,d,x,g){let p=a(u,f,m,d,x,g);m.transmission>0?n.push(p):m.transparent===!0?i.push(p):e.push(p)}function l(u,f,m,d,x,g){let p=a(u,f,m,d,x,g);m.transmission>0?n.unshift(p):m.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||f0),n.length>1&&n.sort(f||Hc),i.length>1&&i.sort(f||Hc)}function h(){for(let u=t,f=s.length;u<f;u++){let m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function d0(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Vc,s.set(n,[a])):i>=r.length?(a=new Vc,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function p0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Nt};break;case"SpotLight":e={position:new O,direction:new O,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":e={color:new Nt,position:new O,halfWidth:new O,halfHeight:new O};break}return s[t.id]=e,e}}}function m0(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var g0=0;function x0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function v0(s){let t=new p0,e=m0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,r=new se,a=new se;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,d=0,x=0,g=0,p=0,w=0,_=0,v=0,R=0,T=0,b=0;c.sort(x0);for(let M=0,y=c.length;M<y;M++){let A=c[M],L=A.color,I=A.intensity,z=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=L.r*I,u+=L.g*I,f+=L.b*I;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],I);b++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=A.shadow.matrix,w++}n.directional[m]=B,m++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(L).multiplyScalar(I),B.distance=z,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[x]=B;let Z=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,Z.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,A.castShadow){let H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=Y,v++}x++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(L).multiplyScalar(I),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[g]=B,g++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let Z=A.shadow,H=e.get(A);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[d]=H,n.pointShadowMap[d]=Y,n.pointShadowMatrix[d]=A.shadow.matrix,_++}n.point[d]=B,d++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(I),B.groundColor.copy(A.groundColor).multiplyScalar(I),n.hemi[p]=B,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==m||P.pointLength!==d||P.spotLength!==x||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==_||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=g,n.point.length=d,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,P.directionalLength=m,P.pointLength=d,P.spotLength=x,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=_,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=b,n.version=g0++)}function l(c,h){let u=0,f=0,m=0,d=0,x=0,g=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(_.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),m++}else if(_.isRectAreaLight){let v=n.rectArea[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(_.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Gc(s){let t=new v0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function _0(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Gc(s),t.set(i,[o])):r>=a.length?(o=new Gc(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var jo=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ko=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},y0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M0=`uniform sampler2D shadow_pass;
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
}`;function b0(s,t,e){let n=new Pr,i=new jt,r=new jt,a=new pe,o=new jo({depthPacking:Eu}),l=new Ko,c={},h=e.maxTextureSize,u={[ti]:Le,[Le]:ti,[nn]:nn},f=new ue({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:y0,fragmentShader:M0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let d=new me;d.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Jt(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nh;let p=this.type;this.render=function(T,b,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Kn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let I=p!==Tn&&this.type===Tn,z=p===Tn&&this.type!==Tn;for(let Y=0,B=T.length;Y<B;Y++){let Z=T[Y],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let tt=H.getFrameExtents();if(i.multiply(tt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/tt.x),i.x=r.x*tt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/tt.y),i.y=r.y*tt.y,H.mapSize.y=r.y)),H.map===null||I===!0||z===!0){let ht=this.type!==Tn?{minFilter:Ge,magFilter:Ge}:{};H.map!==null&&H.map.dispose(),H.map=new In(i.x,i.y,ht),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();let it=H.getViewportCount();for(let ht=0;ht<it;ht++){let bt=H.getViewport(ht);a.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),L.viewport(a),H.updateMatrices(Z,ht),n=H.getFrustum(),v(b,P,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Tn&&w(H,P),H.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(M,y,A)};function w(T,b){let P=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new In(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,P,f,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,P,m,x,null)}function _(T,b,P,M){let y=null,A=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)y=A;else if(y=P.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let L=y.uuid,I=b.uuid,z=c[L];z===void 0&&(z={},c[L]=z);let Y=z[I];Y===void 0&&(Y=y.clone(),z[I]=Y,b.addEventListener("dispose",R)),y=Y}if(y.visible=b.visible,y.wireframe=b.wireframe,M===Tn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let L=s.properties.get(y);L.light=P}return y}function v(T,b,P,M,y){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Tn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);let I=t.update(T),z=T.material;if(Array.isArray(z)){let Y=I.groups;for(let B=0,Z=Y.length;B<Z;B++){let H=Y[B],tt=z[H.materialIndex];if(tt&&tt.visible){let it=_(T,tt,M,y);T.onBeforeShadow(s,T,b,P,I,it,H),s.renderBufferDirect(P,null,I,it,T,H),T.onAfterShadow(s,T,b,P,I,it,H)}}}else if(z.visible){let Y=_(T,z,M,y);T.onBeforeShadow(s,T,b,P,I,Y,null),s.renderBufferDirect(P,null,I,Y,T,null),T.onAfterShadow(s,T,b,P,I,Y,null)}}let L=T.children;for(let I=0,z=L.length;I<z;I++)v(L[I],b,P,M,y)}function R(T){T.target.removeEventListener("dispose",R);for(let P in c){let M=c[P],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var S0={[Qa]:to,[eo]:so,[no]:ro,[Ki]:io,[to]:Qa,[so]:eo,[ro]:no,[io]:Ki};function w0(s,t){function e(){let D=!1,lt=new pe,$=null,K=new pe(0,0,0,0);return{setMask:function(pt){$!==pt&&!D&&(s.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){D=pt},setClear:function(pt,ft,Ut,ae,_e){_e===!0&&(pt*=ae,ft*=ae,Ut*=ae),lt.set(pt,ft,Ut,ae),K.equals(lt)===!1&&(s.clearColor(pt,ft,Ut,ae),K.copy(lt))},reset:function(){D=!1,$=null,K.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,$=null,K=null,pt=null;return{setReversed:function(ft){if(lt!==ft){let Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);let ae=pt;pt=null,this.setClear(ae)}lt=ft},getReversed:function(){return lt},setTest:function(ft){ft?ct(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(ft){$!==ft&&!D&&(s.depthMask(ft),$=ft)},setFunc:function(ft){if(lt&&(ft=S0[ft]),K!==ft){switch(ft){case Qa:s.depthFunc(s.NEVER);break;case to:s.depthFunc(s.ALWAYS);break;case eo:s.depthFunc(s.LESS);break;case Ki:s.depthFunc(s.LEQUAL);break;case no:s.depthFunc(s.EQUAL);break;case io:s.depthFunc(s.GEQUAL);break;case so:s.depthFunc(s.GREATER);break;case ro:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ft}},setLocked:function(ft){D=ft},setClear:function(ft){pt!==ft&&(lt&&(ft=1-ft),s.clearDepth(ft),pt=ft)},reset:function(){D=!1,$=null,K=null,pt=null,lt=!1}}}function i(){let D=!1,lt=null,$=null,K=null,pt=null,ft=null,Ut=null,ae=null,_e=null;return{setTest:function($t){D||($t?ct(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function($t){lt!==$t&&!D&&(s.stencilMask($t),lt=$t)},setFunc:function($t,Fe,ye){($!==$t||K!==Fe||pt!==ye)&&(s.stencilFunc($t,Fe,ye),$=$t,K=Fe,pt=ye)},setOp:function($t,Fe,ye){(ft!==$t||Ut!==Fe||ae!==ye)&&(s.stencilOp($t,Fe,ye),ft=$t,Ut=Fe,ae=ye)},setLocked:function($t){D=$t},setClear:function($t){_e!==$t&&(s.clearStencil($t),_e=$t)},reset:function(){D=!1,lt=null,$=null,K=null,pt=null,ft=null,Ut=null,ae=null,_e=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,m=[],d=null,x=!1,g=null,p=null,w=null,_=null,v=null,R=null,T=null,b=new Nt(0,0,0),P=0,M=!1,y=null,A=null,L=null,I=null,z=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=Z>=2);let tt=null,it={},ht=s.getParameter(s.SCISSOR_BOX),bt=s.getParameter(s.VIEWPORT),xt=new pe().fromArray(ht),W=new pe().fromArray(bt);function et(D,lt,$,K){let pt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(D,ft),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<$;Ut++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(lt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return ft}let gt={};gt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ct(s.DEPTH_TEST),a.setFunc(Ki),Vt(!1),Gt(ql),ct(s.CULL_FACE),F(Kn);function ct(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Et(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function It(D,lt){return u[D]!==lt?(s.bindFramebuffer(D,lt),u[D]=lt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Pt(D,lt){let $=m,K=!1;if(D){$=f.get(lt),$===void 0&&($=[],f.set(lt,$));let pt=D.textures;if($.length!==pt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ut=pt.length;ft<Ut;ft++)$[ft]=s.COLOR_ATTACHMENT0+ft;$.length=pt.length,K=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,K=!0);K&&s.drawBuffers($)}function Qt(D){return d!==D?(s.useProgram(D),d=D,!0):!1}let kt={[vi]:s.FUNC_ADD,[jh]:s.FUNC_SUBTRACT,[Kh]:s.FUNC_REVERSE_SUBTRACT};kt[Qh]=s.MIN,kt[tu]=s.MAX;let re={[eu]:s.ZERO,[nu]:s.ONE,[iu]:s.SRC_COLOR,[ja]:s.SRC_ALPHA,[cu]:s.SRC_ALPHA_SATURATE,[ou]:s.DST_COLOR,[ru]:s.DST_ALPHA,[su]:s.ONE_MINUS_SRC_COLOR,[Ka]:s.ONE_MINUS_SRC_ALPHA,[lu]:s.ONE_MINUS_DST_COLOR,[au]:s.ONE_MINUS_DST_ALPHA,[hu]:s.CONSTANT_COLOR,[uu]:s.ONE_MINUS_CONSTANT_COLOR,[fu]:s.CONSTANT_ALPHA,[du]:s.ONE_MINUS_CONSTANT_ALPHA};function F(D,lt,$,K,pt,ft,Ut,ae,_e,$t){if(D===Kn){x===!0&&(Et(s.BLEND),x=!1);return}if(x===!1&&(ct(s.BLEND),x=!0),D!==Jh){if(D!==g||$t!==M){if((p!==vi||v!==vi)&&(s.blendEquation(s.FUNC_ADD),p=vi,v=vi),$t)switch(D){case Qn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFunc(s.ONE,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Si:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Zl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,_=null,R=null,T=null,b.set(0,0,0),P=0,g=D,M=$t}return}pt=pt||lt,ft=ft||$,Ut=Ut||K,(lt!==p||pt!==v)&&(s.blendEquationSeparate(kt[lt],kt[pt]),p=lt,v=pt),($!==w||K!==_||ft!==R||Ut!==T)&&(s.blendFuncSeparate(re[$],re[K],re[ft],re[Ut]),w=$,_=K,R=ft,T=Ut),(ae.equals(b)===!1||_e!==P)&&(s.blendColor(ae.r,ae.g,ae.b,_e),b.copy(ae),P=_e),g=D,M=!1}function Te(D,lt){D.side===nn?Et(s.CULL_FACE):ct(s.CULL_FACE);let $=D.side===Le;lt&&($=!$),Vt($),D.blending===Qn&&D.transparent===!1?F(Kn):F(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let K=D.stencilWrite;o.setTest(K),K&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){y!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),y=D)}function Gt(D){D!==Yh?(ct(s.CULL_FACE),D!==A&&(D===ql?s.cullFace(s.BACK):D===Zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),A=D}function Ct(D){D!==L&&(B&&s.lineWidth(D),L=D)}function ne(D,lt,$){D?(ct(s.POLYGON_OFFSET_FILL),(I!==lt||z!==$)&&(s.polygonOffset(lt,$),I=lt,z=$)):Et(s.POLYGON_OFFSET_FILL)}function Rt(D){D?ct(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function C(D){D===void 0&&(D=s.TEXTURE0+Y-1),tt!==D&&(s.activeTexture(D),tt=D)}function S(D,lt,$){$===void 0&&(tt===null?$=s.TEXTURE0+Y-1:$=tt);let K=it[$];K===void 0&&(K={type:void 0,texture:void 0},it[$]=K),(K.type!==D||K.texture!==lt)&&(tt!==$&&(s.activeTexture($),tt=$),s.bindTexture(D,lt||gt[D]),K.type=D,K.texture=lt)}function V(){let D=it[tt];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function At(D){xt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),xt.copy(D))}function mt(D){W.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),W.copy(D))}function zt(D,lt){let $=c.get(lt);$===void 0&&($=new WeakMap,c.set(lt,$));let K=$.get(D);K===void 0&&(K=s.getUniformBlockIndex(lt,D.name),$.set(D,K))}function Lt(D,lt){let K=c.get(lt).get(D);l.get(lt)!==K&&(s.uniformBlockBinding(lt,K,D.__bindingPointIndex),l.set(lt,K))}function Xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},tt=null,it={},u={},f=new WeakMap,m=[],d=null,x=!1,g=null,p=null,w=null,_=null,v=null,R=null,T=null,b=new Nt(0,0,0),P=0,M=!1,y=null,A=null,L=null,I=null,z=null,xt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ct,disable:Et,bindFramebuffer:It,drawBuffers:Pt,useProgram:Qt,setBlending:F,setMaterial:Te,setFlipSided:Vt,setCullFace:Gt,setLineWidth:Ct,setPolygonOffset:ne,setScissorTest:Rt,activeTexture:C,bindTexture:S,unbindTexture:V,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:dt,texImage3D:yt,updateUBOMapping:zt,uniformBlockBinding:Lt,texStorage2D:Tt,texStorage3D:nt,texSubImage2D:J,texSubImage3D:st,compressedTexSubImage2D:k,compressedTexSubImage3D:rt,scissor:At,viewport:mt,reset:Xt}}function Wc(s,t,e,n){let i=E0(n);switch(e){case lh:return s*t;case hh:return s*t;case uh:return s*t*2;case Sl:return s*t/i.components*i.byteLength;case wl:return s*t/i.components*i.byteLength;case fh:return s*t*2/i.components*i.byteLength;case El:return s*t*2/i.components*i.byteLength;case ch:return s*t*3/i.components*i.byteLength;case sn:return s*t*4/i.components*i.byteLength;case Tl:return s*t*4/i.components*i.byteLength;case mr:case gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xr:case vr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uo:case po:return Math.max(s,16)*Math.max(t,8)/4;case ho:case fo:return Math.max(s,8)*Math.max(t,8)/2;case mo:case go:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case xo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case wo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ro:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Co:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Po:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Io:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case _r:case Lo:case Do:return Math.ceil(s/4)*Math.ceil(t/4)*16;case dh:case Uo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case No:case Fo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function E0(s){switch(s){case Pn:case rh:return{byteLength:1,components:1};case Rs:case ah:case Us:return{byteLength:2,components:1};case Ml:case bl:return{byteLength:2,components:4};case wi:case yl:case dn:return{byteLength:4,components:1};case oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function T0(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(C,S){return m?new OffscreenCanvas(C,S):br("canvas")}function x(C,S,V){let j=1,Q=Rt(C);if((Q.width>V||Q.height>V)&&(j=V/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let J=Math.floor(j*Q.width),st=Math.floor(j*Q.height);u===void 0&&(u=d(J,st));let k=S?d(J,st):u;return k.width=J,k.height=st,k.getContext("2d").drawImage(C,0,0,J,st),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+J+"x"+st+")."),k}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,S,V,j,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=S;if(S===s.RED&&(V===s.FLOAT&&(J=s.R32F),V===s.HALF_FLOAT&&(J=s.R16F),V===s.UNSIGNED_BYTE&&(J=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.R8UI),V===s.UNSIGNED_SHORT&&(J=s.R16UI),V===s.UNSIGNED_INT&&(J=s.R32UI),V===s.BYTE&&(J=s.R8I),V===s.SHORT&&(J=s.R16I),V===s.INT&&(J=s.R32I)),S===s.RG&&(V===s.FLOAT&&(J=s.RG32F),V===s.HALF_FLOAT&&(J=s.RG16F),V===s.UNSIGNED_BYTE&&(J=s.RG8)),S===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RG8UI),V===s.UNSIGNED_SHORT&&(J=s.RG16UI),V===s.UNSIGNED_INT&&(J=s.RG32UI),V===s.BYTE&&(J=s.RG8I),V===s.SHORT&&(J=s.RG16I),V===s.INT&&(J=s.RG32I)),S===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGB8UI),V===s.UNSIGNED_SHORT&&(J=s.RGB16UI),V===s.UNSIGNED_INT&&(J=s.RGB32UI),V===s.BYTE&&(J=s.RGB8I),V===s.SHORT&&(J=s.RGB16I),V===s.INT&&(J=s.RGB32I)),S===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),V===s.UNSIGNED_INT&&(J=s.RGBA32UI),V===s.BYTE&&(J=s.RGBA8I),V===s.SHORT&&(J=s.RGBA16I),V===s.INT&&(J=s.RGBA32I)),S===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),S===s.RGBA){let st=Q?Xr:Zt.getTransfer(j);V===s.FLOAT&&(J=s.RGBA32F),V===s.HALF_FLOAT&&(J=s.RGBA16F),V===s.UNSIGNED_BYTE&&(J=st===ie?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(C,S){let V;return C?S===null||S===wi||S===es?V=s.DEPTH24_STENCIL8:S===dn?V=s.DEPTH32F_STENCIL8:S===Rs&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===es?V=s.DEPTH_COMPONENT24:S===dn?V=s.DEPTH_COMPONENT32F:S===Rs&&(V=s.DEPTH_COMPONENT16),V}function R(C,S){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ge&&C.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function T(C){let S=C.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&h.delete(S)}function b(C){let S=C.target;S.removeEventListener("dispose",b),y(S)}function P(C){let S=n.get(C);if(S.__webglInit===void 0)return;let V=C.source,j=f.get(V);if(j){let Q=j[S.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&M(C),Object.keys(j).length===0&&f.delete(V)}n.remove(C)}function M(C){let S=n.get(C);s.deleteTexture(S.__webglTexture);let V=C.source,j=f.get(V);delete j[S.__cacheKey],a.memory.textures--}function y(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Q=0;Q<S.__webglFramebuffer[j].length;Q++)s.deleteFramebuffer(S.__webglFramebuffer[j][Q]);else s.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)s.deleteFramebuffer(S.__webglFramebuffer[j]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let V=C.textures;for(let j=0,Q=V.length;j<Q;j++){let J=n.get(V[j]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(V[j])}n.remove(C)}let A=0;function L(){A=0}function I(){let C=A;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),A+=1,C}function z(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){let V=n.get(C);if(C.isVideoTexture&&Ct(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){let j=C.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,C,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function B(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){W(V,C,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function Z(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){W(V,C,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function H(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){et(V,C,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}let tt={[lo]:s.REPEAT,[Mi]:s.CLAMP_TO_EDGE,[co]:s.MIRRORED_REPEAT},it={[Ge]:s.NEAREST,[Su]:s.NEAREST_MIPMAP_NEAREST,[ks]:s.NEAREST_MIPMAP_LINEAR,[fn]:s.LINEAR,[ya]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},ht={[Ru]:s.NEVER,[Uu]:s.ALWAYS,[Cu]:s.LESS,[ph]:s.LEQUAL,[Pu]:s.EQUAL,[Du]:s.GEQUAL,[Iu]:s.GREATER,[Lu]:s.NOTEQUAL};function bt(C,S){if(S.type===dn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===ya||S.magFilter===ks||S.magFilter===bi||S.minFilter===fn||S.minFilter===ya||S.minFilter===ks||S.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,tt[S.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,tt[S.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,tt[S.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,it[S.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ht[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ge||S.minFilter!==ks&&S.minFilter!==bi||S.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function xt(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",T));let j=S.source,Q=f.get(j);Q===void 0&&(Q={},f.set(j,Q));let J=z(S);if(J!==C.__cacheKey){Q[J]===void 0&&(Q[J]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[J].usedTimes++;let st=Q[C.__cacheKey];st!==void 0&&(Q[C.__cacheKey].usedTimes--,st.usedTimes===0&&M(S)),C.__cacheKey=J,C.__webglTexture=Q[J].texture}return V}function W(C,S,V){let j=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=s.TEXTURE_3D);let Q=xt(C,S),J=S.source;e.bindTexture(j,C.__webglTexture,s.TEXTURE0+V);let st=n.get(J);if(J.version!==st.__version||Q===!0){e.activeTexture(s.TEXTURE0+V);let k=Zt.getPrimaries(Zt.workingColorSpace),rt=S.colorSpace===jn?null:Zt.getPrimaries(S.colorSpace),Tt=S.colorSpace===jn||k===rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let nt=x(S.image,!1,i.maxTextureSize);nt=ne(S,nt);let dt=r.convert(S.format,S.colorSpace),yt=r.convert(S.type),At=_(S.internalFormat,dt,yt,S.colorSpace,S.isVideoTexture);bt(j,S);let mt,zt=S.mipmaps,Lt=S.isVideoTexture!==!0,Xt=st.__version===void 0||Q===!0,D=J.dataReady,lt=R(S,nt);if(S.isDepthTexture)At=v(S.format===ns,S.type),Xt&&(Lt?e.texStorage2D(s.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,At,nt.width,nt.height,0,dt,yt,null));else if(S.isDataTexture)if(zt.length>0){Lt&&Xt&&e.texStorage2D(s.TEXTURE_2D,lt,At,zt[0].width,zt[0].height);for(let $=0,K=zt.length;$<K;$++)mt=zt[$],Lt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,mt.width,mt.height,dt,yt,mt.data):e.texImage2D(s.TEXTURE_2D,$,At,mt.width,mt.height,0,dt,yt,mt.data);S.generateMipmaps=!1}else Lt?(Xt&&e.texStorage2D(s.TEXTURE_2D,lt,At,nt.width,nt.height),D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,dt,yt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,At,nt.width,nt.height,0,dt,yt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Lt&&Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,At,zt[0].width,zt[0].height,nt.depth);for(let $=0,K=zt.length;$<K;$++)if(mt=zt[$],S.format!==sn)if(dt!==null)if(Lt){if(D)if(S.layerUpdates.size>0){let pt=Wc(mt.width,mt.height,S.format,S.type);for(let ft of S.layerUpdates){let Ut=mt.data.subarray(ft*pt/mt.data.BYTES_PER_ELEMENT,(ft+1)*pt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,ft,mt.width,mt.height,1,dt,Ut)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,nt.depth,dt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,$,At,mt.width,mt.height,nt.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?D&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,$,0,0,0,mt.width,mt.height,nt.depth,dt,yt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,$,At,mt.width,mt.height,nt.depth,0,dt,yt,mt.data)}else{Lt&&Xt&&e.texStorage2D(s.TEXTURE_2D,lt,At,zt[0].width,zt[0].height);for(let $=0,K=zt.length;$<K;$++)mt=zt[$],S.format!==sn?dt!==null?Lt?D&&e.compressedTexSubImage2D(s.TEXTURE_2D,$,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,$,At,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,mt.width,mt.height,dt,yt,mt.data):e.texImage2D(s.TEXTURE_2D,$,At,mt.width,mt.height,0,dt,yt,mt.data)}else if(S.isDataArrayTexture)if(Lt){if(Xt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,At,nt.width,nt.height,nt.depth),D)if(S.layerUpdates.size>0){let $=Wc(nt.width,nt.height,S.format,S.type);for(let K of S.layerUpdates){let pt=nt.data.subarray(K*$/nt.data.BYTES_PER_ELEMENT,(K+1)*$/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,dt,yt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,yt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,dt,yt,nt.data);else if(S.isData3DTexture)Lt?(Xt&&e.texStorage3D(s.TEXTURE_3D,lt,At,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,yt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,dt,yt,nt.data);else if(S.isFramebufferTexture){if(Xt)if(Lt)e.texStorage2D(s.TEXTURE_2D,lt,At,nt.width,nt.height);else{let $=nt.width,K=nt.height;for(let pt=0;pt<lt;pt++)e.texImage2D(s.TEXTURE_2D,pt,At,$,K,0,dt,yt,null),$>>=1,K>>=1}}else if(zt.length>0){if(Lt&&Xt){let $=Rt(zt[0]);e.texStorage2D(s.TEXTURE_2D,lt,At,$.width,$.height)}for(let $=0,K=zt.length;$<K;$++)mt=zt[$],Lt?D&&e.texSubImage2D(s.TEXTURE_2D,$,0,0,dt,yt,mt):e.texImage2D(s.TEXTURE_2D,$,At,dt,yt,mt);S.generateMipmaps=!1}else if(Lt){if(Xt){let $=Rt(nt);e.texStorage2D(s.TEXTURE_2D,lt,At,$.width,$.height)}D&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,yt,nt)}else e.texImage2D(s.TEXTURE_2D,0,At,dt,yt,nt);g(S)&&p(j),st.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function et(C,S,V){if(S.image.length!==6)return;let j=xt(C,S),Q=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);let J=n.get(Q);if(Q.version!==J.__version||j===!0){e.activeTexture(s.TEXTURE0+V);let st=Zt.getPrimaries(Zt.workingColorSpace),k=S.colorSpace===jn?null:Zt.getPrimaries(S.colorSpace),rt=S.colorSpace===jn||st===k?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,nt=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Tt&&!nt?dt[K]=x(S.image[K],!0,i.maxCubemapSize):dt[K]=nt?S.image[K].image:S.image[K],dt[K]=ne(S,dt[K]);let yt=dt[0],At=r.convert(S.format,S.colorSpace),mt=r.convert(S.type),zt=_(S.internalFormat,At,mt,S.colorSpace),Lt=S.isVideoTexture!==!0,Xt=J.__version===void 0||j===!0,D=Q.dataReady,lt=R(S,yt);bt(s.TEXTURE_CUBE_MAP,S);let $;if(Tt){Lt&&Xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,zt,yt.width,yt.height);for(let K=0;K<6;K++){$=dt[K].mipmaps;for(let pt=0;pt<$.length;pt++){let ft=$[pt];S.format!==sn?At!==null?Lt?D&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,ft.width,ft.height,At,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,zt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,0,0,ft.width,ft.height,At,mt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt,zt,ft.width,ft.height,0,At,mt,ft.data)}}}else{if($=S.mipmaps,Lt&&Xt){$.length>0&&lt++;let K=Rt(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,zt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,At,mt,dt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,dt[K].width,dt[K].height,0,At,mt,dt[K].data);for(let pt=0;pt<$.length;pt++){let Ut=$[pt].image[K].image;Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,Ut.width,Ut.height,At,mt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,zt,Ut.width,Ut.height,0,At,mt,Ut.data)}}else{Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,At,mt,dt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,zt,At,mt,dt[K]);for(let pt=0;pt<$.length;pt++){let ft=$[pt];Lt?D&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,0,0,At,mt,ft.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,pt+1,zt,At,mt,ft.image[K])}}}g(S)&&p(s.TEXTURE_CUBE_MAP),J.__version=Q.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function gt(C,S,V,j,Q,J){let st=r.convert(V.format,V.colorSpace),k=r.convert(V.type),rt=_(V.internalFormat,st,k,V.colorSpace),Tt=n.get(S),nt=n.get(V);if(nt.__renderTarget=S,!Tt.__hasExternalTextures){let dt=Math.max(1,S.width>>J),yt=Math.max(1,S.height>>J);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?e.texImage3D(Q,J,rt,dt,yt,S.depth,0,st,k,null):e.texImage2D(Q,J,rt,dt,yt,0,st,k,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,j,Q,nt.__webglTexture,0,Vt(S)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,j,Q,nt.__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(C,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),S.depthBuffer){let j=S.depthTexture,Q=j&&j.isDepthTexture?j.type:null,J=v(S.stencilBuffer,Q),st=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=Vt(S);Gt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k,J,S.width,S.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,k,J,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,J,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,st,s.RENDERBUFFER,C)}else{let j=S.textures;for(let Q=0;Q<j.length;Q++){let J=j[Q],st=r.convert(J.format,J.colorSpace),k=r.convert(J.type),rt=_(J.internalFormat,st,k,J.colorSpace),Tt=Vt(S);V&&Gt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Tt,rt,S.width,S.height):Gt(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Tt,rt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,rt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let Q=j.__webglTexture,J=Vt(S);if(S.depthTexture.format===$i)Gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(S.depthTexture.format===ns)Gt(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,J):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function It(C){let S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){let Q=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),S.__depthDisposeCallback=Q}S.__boundDepthTexture=j}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Et(S.__webglFramebuffer,C)}else if(V){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=s.createRenderbuffer(),ct(S.__webglDepthbuffer[j],C,!1);else{let Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer[j];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,J)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),ct(S.__webglDepthbuffer,C,!1);else{let j=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,Q)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(C,S,V){let j=n.get(C);S!==void 0&&gt(j.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&It(C)}function Qt(C){let S=C.texture,V=n.get(C),j=n.get(S);C.addEventListener("dispose",b);let Q=C.textures,J=C.isWebGLCubeRenderTarget===!0,st=Q.length>1;if(st||(j.__webglTexture===void 0&&(j.__webglTexture=s.createTexture()),j.__version=S.version,a.memory.textures++),J){V.__webglFramebuffer=[];for(let k=0;k<6;k++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[k]=[];for(let rt=0;rt<S.mipmaps.length;rt++)V.__webglFramebuffer[k][rt]=s.createFramebuffer()}else V.__webglFramebuffer[k]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let k=0;k<S.mipmaps.length;k++)V.__webglFramebuffer[k]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(st)for(let k=0,rt=Q.length;k<rt;k++){let Tt=n.get(Q[k]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Gt(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let k=0;k<Q.length;k++){let rt=Q[k];V.__webglColorRenderbuffer[k]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[k]);let Tt=r.convert(rt.format,rt.colorSpace),nt=r.convert(rt.type),dt=_(rt.internalFormat,Tt,nt,rt.colorSpace,C.isXRRenderTarget===!0),yt=Vt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,dt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+k,s.RENDERBUFFER,V.__webglColorRenderbuffer[k])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ct(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){e.bindTexture(s.TEXTURE_CUBE_MAP,j.__webglTexture),bt(s.TEXTURE_CUBE_MAP,S);for(let k=0;k<6;k++)if(S.mipmaps&&S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)gt(V.__webglFramebuffer[k][rt],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,rt);else gt(V.__webglFramebuffer[k],C,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);g(S)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(st){for(let k=0,rt=Q.length;k<rt;k++){let Tt=Q[k],nt=n.get(Tt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),bt(s.TEXTURE_2D,Tt),gt(V.__webglFramebuffer,C,Tt,s.COLOR_ATTACHMENT0+k,s.TEXTURE_2D,0),g(Tt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let k=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(k=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(k,j.__webglTexture),bt(k,S),S.mipmaps&&S.mipmaps.length>0)for(let rt=0;rt<S.mipmaps.length;rt++)gt(V.__webglFramebuffer[rt],C,S,s.COLOR_ATTACHMENT0,k,rt);else gt(V.__webglFramebuffer,C,S,s.COLOR_ATTACHMENT0,k,0);g(S)&&p(k),e.unbindTexture()}C.depthBuffer&&It(C)}function kt(C){let S=C.textures;for(let V=0,j=S.length;V<j;V++){let Q=S[V];if(g(Q)){let J=w(C),st=n.get(Q).__webglTexture;e.bindTexture(J,st),p(J),e.unbindTexture()}}}let re=[],F=[];function Te(C){if(C.samples>0){if(Gt(C)===!1){let S=C.textures,V=C.width,j=C.height,Q=s.COLOR_BUFFER_BIT,J=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=n.get(C),k=S.length>1;if(k)for(let rt=0;rt<S.length;rt++)e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,st.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglFramebuffer);for(let rt=0;rt<S.length;rt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),k){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Tt=n.get(S[rt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,V,j,0,0,V,j,Q,s.NEAREST),l===!0&&(re.length=0,F.length=0,re.push(s.COLOR_ATTACHMENT0+rt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(re.push(J),F.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),k)for(let rt=0;rt<S.length;rt++){e.bindFramebuffer(s.FRAMEBUFFER,st.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.RENDERBUFFER,st.__webglColorRenderbuffer[rt]);let Tt=n.get(S[rt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,st.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+rt,s.TEXTURE_2D,Tt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,st.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Vt(C){return Math.min(i.maxSamples,C.samples)}function Gt(C){let S=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ct(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function ne(C,S){let V=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==si&&V!==jn&&(Zt.getTransfer(V)===ie?(j!==sn||Q!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}function Rt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Pt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Gt}function A0(s,t){function e(n,i=jn){let r,a=Zt.getTransfer(i);if(n===Pn)return s.UNSIGNED_BYTE;if(n===Ml)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===oh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rh)return s.BYTE;if(n===ah)return s.SHORT;if(n===Rs)return s.UNSIGNED_SHORT;if(n===yl)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===Us)return s.HALF_FLOAT;if(n===lh)return s.ALPHA;if(n===ch)return s.RGB;if(n===sn)return s.RGBA;if(n===hh)return s.LUMINANCE;if(n===uh)return s.LUMINANCE_ALPHA;if(n===$i)return s.DEPTH_COMPONENT;if(n===ns)return s.DEPTH_STENCIL;if(n===Sl)return s.RED;if(n===wl)return s.RED_INTEGER;if(n===fh)return s.RG;if(n===El)return s.RG_INTEGER;if(n===Tl)return s.RGBA_INTEGER;if(n===mr||n===gr||n===xr||n===vr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ho||n===uo||n===fo||n===po)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===po)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mo||n===go||n===xo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mo||n===go)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===xo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===vo||n===_o||n===yo||n===Mo||n===bo||n===So||n===wo||n===Eo||n===To||n===Ao||n===Ro||n===Co||n===Po||n===Io)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_o)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===Lo||n===Do)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===Uo||n===No||n===Fo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Qo=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},pn=class extends Xe{constructor(){super(),this.isGroup=!0,this.type="Group"}},R0={type:"move"},As=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,d=.005;c.inputState.pinching&&f>m+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(R0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new pn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},C0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P0=`
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

}`,tl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new We,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ue({vertexShader:C0,fragmentShader:P0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new ii(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},el=class extends ei{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,d=null,x=new tl,g=e.getContextAttributes(),p=null,w=null,_=[],v=[],R=new jt,T=null,b=new Ne;b.viewport=new pe;let P=new Ne;P.viewport=new pe;let M=[b,P],y=new Qo,A=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let et=_[W];return et===void 0&&(et=new As,_[W]=et),et.getTargetRaySpace()},this.getControllerGrip=function(W){let et=_[W];return et===void 0&&(et=new As,_[W]=et),et.getGripSpace()},this.getHand=function(W){let et=_[W];return et===void 0&&(et=new As,_[W]=et),et.getHandSpace()};function I(W){let et=v.indexOf(W.inputSource);if(et===-1)return;let gt=_[et];gt!==void 0&&(gt.update(W.inputSource,W.frame,c||a),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",Y);for(let W=0;W<_.length;W++){let et=v[W];et!==null&&(v[W]=null,_[W].disconnect(et))}A=null,L=null,x.reset(),t.setRenderTarget(p),m=null,f=null,u=null,i=null,w=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let et={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new In(m.framebufferWidth,m.framebufferHeight,{format:sn,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let et=null,gt=null,ct=null;g.depth&&(ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=g.stencil?ns:$i,gt=g.stencil?es:wi);let Et={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(Et),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new In(f.textureWidth,f.textureHeight,{format:sn,type:Pn,depthTexture:new Lr(f.textureWidth,f.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(W){for(let et=0;et<W.removed.length;et++){let gt=W.removed[et],ct=v.indexOf(gt);ct>=0&&(v[ct]=null,_[ct].disconnect(gt))}for(let et=0;et<W.added.length;et++){let gt=W.added[et],ct=v.indexOf(gt);if(ct===-1){for(let It=0;It<_.length;It++)if(It>=v.length){v.push(gt),ct=It;break}else if(v[It]===null){v[It]=gt,ct=It;break}if(ct===-1)break}let Et=_[ct];Et&&Et.connect(gt)}}let B=new O,Z=new O;function H(W,et,gt){B.setFromMatrixPosition(et.matrixWorld),Z.setFromMatrixPosition(gt.matrixWorld);let ct=B.distanceTo(Z),Et=et.projectionMatrix.elements,It=gt.projectionMatrix.elements,Pt=Et[14]/(Et[10]-1),Qt=Et[14]/(Et[10]+1),kt=(Et[9]+1)/Et[5],re=(Et[9]-1)/Et[5],F=(Et[8]-1)/Et[0],Te=(It[8]+1)/It[0],Vt=Pt*F,Gt=Pt*Te,Ct=ct/(-F+Te),ne=Ct*-F;if(et.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ne),W.translateZ(Ct),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Et[10]===-1)W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let Rt=Pt+Ct,C=Qt+Ct,S=Vt-ne,V=Gt+(ct-ne),j=kt*Qt/C*Rt,Q=re*Qt/C*Rt;W.projectionMatrix.makePerspective(S,V,j,Q,Rt,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function tt(W,et){et===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(et.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let et=W.near,gt=W.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),y.near=P.near=b.near=et,y.far=P.far=b.far=gt,(A!==y.near||L!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,L=y.far),b.layers.mask=W.layers.mask|2,P.layers.mask=W.layers.mask|4,y.layers.mask=b.layers.mask|P.layers.mask;let ct=W.parent,Et=y.cameras;tt(y,ct);for(let It=0;It<Et.length;It++)tt(Et[It],ct);Et.length===2?H(y,b,P):y.projectionMatrix.copy(b.projectionMatrix),it(W,y,ct)};function it(W,et,gt){gt===null?W.matrix.copy(et.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply(et.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(et.projectionMatrix),W.projectionMatrixInverse.copy(et.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Oo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ht=null;function bt(W,et){if(h=et.getViewerPose(c||a),d=et,h!==null){let gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let ct=!1;gt.length!==y.cameras.length&&(y.cameras.length=0,ct=!0);for(let It=0;It<gt.length;It++){let Pt=gt[It],Qt=null;if(m!==null)Qt=m.getViewport(Pt);else{let re=u.getViewSubImage(f,Pt);Qt=re.viewport,It===0&&(t.setRenderTargetTextures(w,re.colorTexture,f.ignoreDepthValues?void 0:re.depthStencilTexture),t.setRenderTarget(w))}let kt=M[It];kt===void 0&&(kt=new Ne,kt.layers.enable(It),kt.viewport=new pe,M[It]=kt),kt.matrix.fromArray(Pt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Pt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),It===0&&(y.matrix.copy(kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ct===!0&&y.cameras.push(kt)}let Et=i.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let It=u.getDepthInformation(gt[0]);It&&It.isValid&&It.texture&&x.init(t,It,i.renderState)}}for(let gt=0;gt<_.length;gt++){let ct=v[gt],Et=_[gt];ct!==null&&Et!==void 0&&Et.update(ct,et,c||a)}ht&&ht(W,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),d=null}let xt=new vh;xt.setAnimationLoop(bt),this.setAnimationLoop=function(W){ht=W},this.dispose=function(){}}},gi=new rn,I0=new se;function L0(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,xh(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,w,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&m(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),d(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,w,_):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Le&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Le&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let w=t.get(p),_=w.envMap,v=w.envMapRotation;_&&(g.envMap.value=_,gi.copy(v),gi.x*=-1,gi.y*=-1,gi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),g.envMapRotation.value.setFromMatrix4(I0.makeRotationFromEuler(gi)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,w,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Le&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function D0(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){let v=_.program;n.uniformBlockBinding(w,v)}function c(w,_){let v=i[w.id];v===void 0&&(d(w),v=h(w),i[w.id]=v,w.addEventListener("dispose",g));let R=_.program;n.updateUBOMapping(w,R);let T=t.render.frame;r[w.id]!==T&&(f(w),r[w.id]=T)}function h(w){let _=u();w.__bindingPointIndex=_;let v=s.createBuffer(),R=w.__size,T=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let _=i[w.id],v=w.uniforms,R=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let T=0,b=v.length;T<b;T++){let P=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=P.length;M<y;M++){let A=P[M];if(m(A,T,M,R)===!0){let L=A.__offset,I=Array.isArray(A.value)?A.value:[A.value],z=0;for(let Y=0;Y<I.length;Y++){let B=I[Y],Z=x(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,L+z,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(w,_,v,R){let T=w.value,b=_+"_"+v;if(R[b]===void 0)return typeof T=="number"||typeof T=="boolean"?R[b]=T:R[b]=T.clone(),!0;{let P=R[b];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[b]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function d(w){let _=w.uniforms,v=0,R=16;for(let b=0,P=_.length;b<P;b++){let M=Array.isArray(_[b])?_[b]:[_[b]];for(let y=0,A=M.length;y<A;y++){let L=M[y],I=Array.isArray(L.value)?L.value:[L.value];for(let z=0,Y=I.length;z<Y;z++){let B=I[z],Z=x(B),H=v%R,tt=H%Z.boundary,it=H+tt;v+=tt,it!==0&&R-it<Z.storage&&(v+=R-it),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Z.storage}}}let T=v%R;return T>0&&(v+=R-T),w.__size=v,w.__cache={},this}function x(w){let _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function g(w){let _=w.target;_.removeEventListener("dispose",g);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:l,update:c,dispose:p}}var Dr=class{constructor(t={}){let{canvas:e=Fu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let d=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,w=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=mn,this.toneMappingExposure=1;let v=this,R=!1,T=0,b=0,P=null,M=-1,y=null,A=new pe,L=new pe,I=null,z=new Nt(0),Y=0,B=e.width,Z=e.height,H=1,tt=null,it=null,ht=new pe(0,0,B,Z),bt=new pe(0,0,B,Z),xt=!1,W=new Pr,et=!1,gt=!1,ct=new se,Et=new se,It=new O,Pt=new pe,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function re(){return P===null?H:1}let F=n;function Te(E,U){return e.getContext(E,U)}try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_l}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),F===null){let U="webgl2";if(F=Te(U,E),F===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Vt,Gt,Ct,ne,Rt,C,S,V,j,Q,J,st,k,rt,Tt,nt,dt,yt,At,mt,zt,Lt,Xt,D;function lt(){Vt=new $p(F),Vt.init(),Lt=new A0(F,Vt),Gt=new Gp(F,Vt,t,Lt),Ct=new w0(F,Vt),Gt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),ne=new Kp(F),Rt=new u0,C=new T0(F,Vt,Ct,Rt,Gt,Lt,ne),S=new Xp(v),V=new Zp(v),j=new rf(F),Xt=new Hp(F,j),Q=new Jp(F,j,ne,Xt),J=new tm(F,Q,j,ne),At=new Qp(F,Gt,C),nt=new Wp(Rt),st=new h0(v,S,V,Vt,Gt,Xt,nt),k=new L0(v,Rt),rt=new d0,Tt=new _0(Vt),yt=new kp(v,S,V,Ct,J,m,l),dt=new b0(v,J,Gt),D=new D0(F,ne,Gt,Ct),mt=new Vp(F,Vt,ne),zt=new jp(F,Vt,ne),ne.programs=st.programs,v.capabilities=Gt,v.extensions=Vt,v.properties=Rt,v.renderLists=rt,v.shadowMap=dt,v.state=Ct,v.info=ne}lt();let $=new el(v,F);this.xr=$,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let E=Vt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Vt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(E){E!==void 0&&(H=E,this.setSize(B,Z,!1))},this.getSize=function(E){return E.set(B,Z)},this.setSize=function(E,U,X=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,Z=U,e.width=Math.floor(E*H),e.height=Math.floor(U*H),X===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(B*H,Z*H).floor()},this.setDrawingBufferSize=function(E,U,X){B=E,Z=U,H=X,e.width=Math.floor(E*X),e.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(ht)},this.setViewport=function(E,U,X,q){E.isVector4?ht.set(E.x,E.y,E.z,E.w):ht.set(E,U,X,q),Ct.viewport(A.copy(ht).multiplyScalar(H).round())},this.getScissor=function(E){return E.copy(bt)},this.setScissor=function(E,U,X,q){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,U,X,q),Ct.scissor(L.copy(bt).multiplyScalar(H).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(E){Ct.setScissorTest(xt=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){it=E},this.getClearColor=function(E){return E.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor.apply(yt,arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha.apply(yt,arguments)},this.clear=function(E=!0,U=!0,X=!0){let q=0;if(E){let N=!1;if(P!==null){let at=P.texture.format;N=at===Tl||at===El||at===wl}if(N){let at=P.texture.type,ot=at===Pn||at===wi||at===Rs||at===es||at===Ml||at===bl,vt=yt.getClearColor(),_t=yt.getClearAlpha(),Dt=vt.r,Ft=vt.g,Mt=vt.b;ot?(d[0]=Dt,d[1]=Ft,d[2]=Mt,d[3]=_t,F.clearBufferuiv(F.COLOR,0,d)):(x[0]=Dt,x[1]=Ft,x[2]=Mt,x[3]=_t,F.clearBufferiv(F.COLOR,0,x))}else q|=F.COLOR_BUFFER_BIT}U&&(q|=F.DEPTH_BUFFER_BIT),X&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),rt.dispose(),Tt.dispose(),Rt.dispose(),S.dispose(),V.dispose(),J.dispose(),Xt.dispose(),D.dispose(),st.dispose(),$.dispose(),$.removeEventListener("sessionstart",qe),$.removeEventListener("sessionend",Ye),Be.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let E=ne.autoReset,U=dt.enabled,X=dt.autoUpdate,q=dt.needsUpdate,N=dt.type;lt(),ne.autoReset=E,dt.enabled=U,dt.autoUpdate=X,dt.needsUpdate=q,dt.type=N}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ut(E){let U=E.target;U.removeEventListener("dispose",Ut),ae(U)}function ae(E){_e(E),Rt.remove(E)}function _e(E){let U=Rt.get(E).programs;U!==void 0&&(U.forEach(function(X){st.releaseProgram(X)}),E.isShaderMaterial&&st.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,q,N,at){U===null&&(U=Qt);let ot=N.isMesh&&N.matrixWorld.determinant()<0,vt=ps(E,U,X,q,N);Ct.setMaterial(q,ot);let _t=X.index,Dt=1;if(q.wireframe===!0){if(_t=Q.getWireframeAttribute(X),_t===void 0)return;Dt=2}let Ft=X.drawRange,Mt=X.attributes.position,Wt=Ft.start*Dt,te=(Ft.start+Ft.count)*Dt;at!==null&&(Wt=Math.max(Wt,at.start*Dt),te=Math.min(te,(at.start+at.count)*Dt)),_t!==null?(Wt=Math.max(Wt,0),te=Math.min(te,_t.count)):Mt!=null&&(Wt=Math.max(Wt,0),te=Math.min(te,Mt.count));let ee=te-Wt;if(ee<0||ee===1/0)return;Xt.setup(N,q,vt,X,_t);let Ae,qt=mt;if(_t!==null&&(Ae=j.get(_t),qt=zt,qt.setIndex(Ae)),N.isMesh)q.wireframe===!0?(Ct.setLineWidth(q.wireframeLinewidth*re()),qt.setMode(F.LINES)):qt.setMode(F.TRIANGLES);else if(N.isLine){let St=q.linewidth;St===void 0&&(St=1),Ct.setLineWidth(St*re()),N.isLineSegments?qt.setMode(F.LINES):N.isLineLoop?qt.setMode(F.LINE_LOOP):qt.setMode(F.LINE_STRIP)}else N.isPoints?qt.setMode(F.POINTS):N.isSprite&&qt.setMode(F.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let St=N._multiDrawStarts,Re=N._multiDrawCounts,Yt=N._multiDrawCount,Ke=_t?j.get(_t).bytesPerElement:1,Ii=Rt.get(q).currentProgram.getUniforms();for(let ke=0;ke<Yt;ke++)Ii.setValue(F,"_gl_DrawID",ke),qt.render(St[ke]/Ke,Re[ke])}else if(N.isInstancedMesh)qt.renderInstances(Wt,ee,N.count);else if(X.isInstancedBufferGeometry){let St=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Re=Math.min(X.instanceCount,St);qt.renderInstances(Wt,ee,Re)}else qt.render(Wt,ee)};function $t(E,U,X){E.transparent===!0&&E.side===nn&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,hi(E,U,X),E.side=ti,E.needsUpdate=!0,hi(E,U,X),E.side=nn):hi(E,U,X)}this.compile=function(E,U,X=null){X===null&&(X=E),p=Tt.get(X),p.init(U),_.push(p),X.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==X&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let q=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let at=N.material;if(at)if(Array.isArray(at))for(let ot=0;ot<at.length;ot++){let vt=at[ot];$t(vt,X,N),q.add(vt)}else $t(at,X,N),q.add(at)}),_.pop(),p=null,q},this.compileAsync=function(E,U,X=null){let q=this.compile(E,U,X);return new Promise(N=>{function at(){if(q.forEach(function(ot){Rt.get(ot).currentProgram.isReady()&&q.delete(ot)}),q.size===0){N(E);return}setTimeout(at,10)}Vt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Fe=null;function ye(E){Fe&&Fe(E)}function qe(){Be.stop()}function Ye(){Be.start()}let Be=new vh;Be.setAnimationLoop(ye),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(E){Fe=E,$.setAnimationLoop(E),E===null?Be.stop():Be.start()},$.addEventListener("sessionstart",qe),$.addEventListener("sessionend",Ye),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,P),p=Tt.get(E,_.length),p.init(U),_.push(p),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(Et),gt=this.localClippingEnabled,et=nt.init(this.clippingPlanes,gt),g=rt.get(E,w.length),g.init(),w.push(g),$.enabled===!0&&$.isPresenting===!0){let at=v.xr.getDepthSensingMesh();at!==null&&yn(at,U,-1/0,v.sortObjects)}yn(E,U,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(tt,it),kt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,kt&&yt.addToRenderList(g,E),this.info.render.frame++,et===!0&&nt.beginShadows();let X=p.state.shadowsArray;dt.render(X,E,U),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=g.opaque,N=g.transmissive;if(p.setupLights(),U.isArrayCamera){let at=U.cameras;if(N.length>0)for(let ot=0,vt=at.length;ot<vt;ot++){let _t=at[ot];Pi(q,N,E,_t)}kt&&yt.render(E);for(let ot=0,vt=at.length;ot<vt;ot++){let _t=at[ot];Hn(g,E,_t,_t.viewport)}}else N.length>0&&Pi(q,N,E,U),kt&&yt.render(E),Hn(g,E,U);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,U),Xt.resetDefaultState(),M=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],et===!0&&nt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function yn(E,U,X,q){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||W.intersectsSprite(E)){q&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Et);let ot=J.update(E),vt=E.material;vt.visible&&g.push(E,ot,vt,X,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||W.intersectsObject(E))){let ot=J.update(E),vt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Pt.copy(ot.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(Et)),Array.isArray(vt)){let _t=ot.groups;for(let Dt=0,Ft=_t.length;Dt<Ft;Dt++){let Mt=_t[Dt],Wt=vt[Mt.materialIndex];Wt&&Wt.visible&&g.push(E,ot,Wt,X,Pt.z,Mt)}}else vt.visible&&g.push(E,ot,vt,X,Pt.z,null)}}let at=E.children;for(let ot=0,vt=at.length;ot<vt;ot++)yn(at[ot],U,X,q)}function Hn(E,U,X,q){let N=E.opaque,at=E.transmissive,ot=E.transparent;p.setupLightsView(X),et===!0&&nt.setGlobalState(v.clippingPlanes,X),q&&Ct.viewport(A.copy(q)),N.length>0&&Vn(N,U,X),at.length>0&&Vn(at,U,X),ot.length>0&&Vn(ot,U,X),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Pi(E,U,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new In(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Us:Pn,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let at=p.state.transmissionRenderTarget[q.id],ot=q.viewport||A;at.setSize(ot.z,ot.w);let vt=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(z),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),kt&&yt.render(X);let _t=v.toneMapping;v.toneMapping=mn;let Dt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),et===!0&&nt.setGlobalState(v.clippingPlanes,q),Vn(E,X,q),C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let Mt=0,Wt=U.length;Mt<Wt;Mt++){let te=U[Mt],ee=te.object,Ae=te.geometry,qt=te.material,St=te.group;if(qt.side===nn&&ee.layers.test(q.layers)){let Re=qt.side;qt.side=Le,qt.needsUpdate=!0,fs(ee,X,q,Ae,qt,St),qt.side=Re,qt.needsUpdate=!0,Ft=!0}}Ft===!0&&(C.updateMultisampleRenderTarget(at),C.updateRenderTargetMipmap(at))}v.setRenderTarget(vt),v.setClearColor(z,Y),Dt!==void 0&&(q.viewport=Dt),v.toneMapping=_t}function Vn(E,U,X){let q=U.isScene===!0?U.overrideMaterial:null;for(let N=0,at=E.length;N<at;N++){let ot=E[N],vt=ot.object,_t=ot.geometry,Dt=q===null?ot.material:q,Ft=ot.group;vt.layers.test(X.layers)&&fs(vt,U,X,_t,Dt,Ft)}}function fs(E,U,X,q,N,at){E.onBeforeRender(v,U,X,q,N,at),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,X,q,E,at),N.transparent===!0&&N.side===nn&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,v.renderBufferDirect(X,U,q,N,E,at),N.side=ti,N.needsUpdate=!0,v.renderBufferDirect(X,U,q,N,E,at),N.side=nn):v.renderBufferDirect(X,U,q,N,E,at),E.onAfterRender(v,U,X,q,N,at)}function hi(E,U,X){U.isScene!==!0&&(U=Qt);let q=Rt.get(E),N=p.state.lights,at=p.state.shadowsArray,ot=N.state.version,vt=st.getParameters(E,N.state,at,U,X),_t=st.getProgramCacheKey(vt),Dt=q.programs;q.environment=E.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(E.isMeshStandardMaterial?V:S).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Ut),Dt=new Map,q.programs=Dt);let Ft=Dt.get(_t);if(Ft!==void 0){if(q.currentProgram===Ft&&q.lightsStateVersion===ot)return cn(E,vt),Ft}else vt.uniforms=st.getUniforms(E),E.onBeforeCompile(vt,v),Ft=st.acquireProgram(vt,_t),Dt.set(_t,Ft),q.uniforms=vt.uniforms;let Mt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),cn(E,vt),q.needsLights=Bs(E),q.lightsStateVersion=ot,q.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),q.currentProgram=Ft,q.uniformsList=null,Ft}function ds(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=ji.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function cn(E,U){let X=Rt.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function ps(E,U,X,q,N){U.isScene!==!0&&(U=Qt),C.resetTextureUnits();let at=U.fog,ot=q.isMeshStandardMaterial?U.environment:null,vt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:si,_t=(q.isMeshStandardMaterial?V:S).get(q.envMap||ot),Dt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ft=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Mt=!!X.morphAttributes.position,Wt=!!X.morphAttributes.normal,te=!!X.morphAttributes.color,ee=mn;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ee=v.toneMapping);let Ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qt=Ae!==void 0?Ae.length:0,St=Rt.get(q),Re=p.state.lights;if(et===!0&&(gt===!0||E!==y)){let Ze=E===y&&q.id===M;nt.setState(q,E,Ze)}let Yt=!1;q.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Re.state.version||St.outputColorSpace!==vt||N.isBatchedMesh&&St.batching===!1||!N.isBatchedMesh&&St.batching===!0||N.isBatchedMesh&&St.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&St.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&St.instancing===!1||!N.isInstancedMesh&&St.instancing===!0||N.isSkinnedMesh&&St.skinning===!1||!N.isSkinnedMesh&&St.skinning===!0||N.isInstancedMesh&&St.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&St.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&St.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&St.instancingMorph===!1&&N.morphTexture!==null||St.envMap!==_t||q.fog===!0&&St.fog!==at||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==nt.numPlanes||St.numIntersection!==nt.numIntersection)||St.vertexAlphas!==Dt||St.vertexTangents!==Ft||St.morphTargets!==Mt||St.morphNormals!==Wt||St.morphColors!==te||St.toneMapping!==ee||St.morphTargetsCount!==qt)&&(Yt=!0):(Yt=!0,St.__version=q.version);let Ke=St.currentProgram;Yt===!0&&(Ke=hi(q,U,N));let Ii=!1,ke=!1,ms=!1,oe=Ke.getUniforms(),hn=St.uniforms;if(Ct.useProgram(Ke.program)&&(Ii=!0,ke=!0,ms=!0),q.id!==M&&(M=q.id,ke=!0),Ii||y!==E){Ct.buffers.depth.getReversed()?(ct.copy(E.projectionMatrix),Ou(ct),Bu(ct),oe.setValue(F,"projectionMatrix",ct)):oe.setValue(F,"projectionMatrix",E.projectionMatrix),oe.setValue(F,"viewMatrix",E.matrixWorldInverse);let Gn=oe.map.cameraPosition;Gn!==void 0&&Gn.setValue(F,It.setFromMatrixPosition(E.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&oe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,ke=!0,ms=!0)}if(N.isSkinnedMesh){oe.setOptional(F,N,"bindMatrix"),oe.setOptional(F,N,"bindMatrixInverse");let Ze=N.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),oe.setValue(F,"boneTexture",Ze.boneTexture,C))}N.isBatchedMesh&&(oe.setOptional(F,N,"batchingTexture"),oe.setValue(F,"batchingTexture",N._matricesTexture,C),oe.setOptional(F,N,"batchingIdTexture"),oe.setValue(F,"batchingIdTexture",N._indirectTexture,C),oe.setOptional(F,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(F,"batchingColorTexture",N._colorsTexture,C));let gs=X.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0)&&At.update(N,X,Ke),(ke||St.receiveShadow!==N.receiveShadow)&&(St.receiveShadow=N.receiveShadow,oe.setValue(F,"receiveShadow",N.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hn.envMap.value=_t,hn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(hn.envMapIntensity.value=U.environmentIntensity),ke&&(oe.setValue(F,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&_a(hn,ms),at&&q.fog===!0&&k.refreshFogUniforms(hn,at),k.refreshMaterialUniforms(hn,q,H,Z,p.state.transmissionRenderTarget[E.id]),ji.upload(F,ds(St),hn,C)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ji.upload(F,ds(St),hn,C),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&oe.setValue(F,"center",N.center),oe.setValue(F,"modelViewMatrix",N.modelViewMatrix),oe.setValue(F,"normalMatrix",N.normalMatrix),oe.setValue(F,"modelMatrix",N.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Ze=q.uniformsGroups;for(let Gn=0,Wn=Ze.length;Gn<Wn;Gn++){let Xl=Ze[Gn];D.update(Xl,Ke),D.bind(Xl,Ke)}}return Ke}function _a(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Bs(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,U,X){Rt.get(E.texture).__webglTexture=U,Rt.get(E.depthTexture).__webglTexture=X;let q=Rt.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){let X=Rt.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){P=E,T=U,b=X;let q=!0,N=null,at=!1,ot=!1;if(E){let _t=Rt.get(E);if(_t.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(_t.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(_t.__hasExternalTextures)C.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Mt=E.depthTexture;if(_t.__boundDepthTexture!==Mt){if(Mt!==null&&Rt.has(Mt)&&(E.width!==Mt.image.width||E.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}let Dt=E.texture;(Dt.isData3DTexture||Dt.isDataArrayTexture||Dt.isCompressedArrayTexture)&&(ot=!0);let Ft=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ft[U])?N=Ft[U][X]:N=Ft[U],at=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?N=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ft)?N=Ft[X]:N=Ft,A.copy(E.viewport),L.copy(E.scissor),I=E.scissorTest}else A.copy(ht).multiplyScalar(H).floor(),L.copy(bt).multiplyScalar(H).floor(),I=xt;if(Ct.bindFramebuffer(F.FRAMEBUFFER,N)&&q&&Ct.drawBuffers(E,N),Ct.viewport(A),Ct.scissor(L),Ct.setScissorTest(I),at){let _t=Rt.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,_t.__webglTexture,X)}else if(ot){let _t=Rt.get(E.texture),Dt=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,_t.__webglTexture,X||0,Dt)}M=-1},this.readRenderTargetPixels=function(E,U,X,q,N,at,ot){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ot!==void 0&&(vt=vt[ot]),vt){Ct.bindFramebuffer(F.FRAMEBUFFER,vt);try{let _t=E.texture,Dt=_t.format,Ft=_t.type;if(!Gt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-q&&X>=0&&X<=E.height-N&&F.readPixels(U,X,q,N,Lt.convert(Dt),Lt.convert(Ft),at)}finally{let _t=P!==null?Rt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,q,N,at,ot){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ot!==void 0&&(vt=vt[ot]),vt){let _t=E.texture,Dt=_t.format,Ft=_t.type;if(!Gt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-q&&X>=0&&X<=E.height-N){Ct.bindFramebuffer(F.FRAMEBUFFER,vt);let Mt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.bufferData(F.PIXEL_PACK_BUFFER,at.byteLength,F.STREAM_READ),F.readPixels(U,X,q,N,Lt.convert(Dt),Lt.convert(Ft),0);let Wt=P!==null?Rt.get(P).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,Wt);let te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zu(F,te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Mt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,at),F.deleteBuffer(Mt),F.deleteSync(te),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,X=0){E.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);let q=Math.pow(2,-X),N=Math.floor(E.image.width*q),at=Math.floor(E.image.height*q),ot=U!==null?U.x:0,vt=U!==null?U.y:0;C.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,ot,vt,N,at),Ct.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,q=null,N=0){E.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,X=null);let at,ot,vt,_t,Dt,Ft,Mt,Wt,te,ee=E.isCompressedTexture?E.mipmaps[N]:E.image;X!==null?(at=X.max.x-X.min.x,ot=X.max.y-X.min.y,vt=X.isBox3?X.max.z-X.min.z:1,_t=X.min.x,Dt=X.min.y,Ft=X.isBox3?X.min.z:0):(at=ee.width,ot=ee.height,vt=ee.depth||1,_t=0,Dt=0,Ft=0),q!==null?(Mt=q.x,Wt=q.y,te=q.z):(Mt=0,Wt=0,te=0);let Ae=Lt.convert(U.format),qt=Lt.convert(U.type),St;U.isData3DTexture?(C.setTexture3D(U,0),St=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),St=F.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),St=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Re=F.getParameter(F.UNPACK_ROW_LENGTH),Yt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),Ii=F.getParameter(F.UNPACK_SKIP_ROWS),ke=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,ee.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ee.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,Dt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ft);let ms=E.isDataArrayTexture||E.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){let hn=Rt.get(E),gs=Rt.get(U),Ze=Rt.get(hn.__renderTarget),Gn=Rt.get(gs.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,Ze.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<vt;Wn++)ms&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,N,Ft+Wn),E.isDepthTexture?(oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.get(U).__webglTexture,N,te+Wn),F.blitFramebuffer(_t,Dt,at,ot,Mt,Wt,at,ot,F.DEPTH_BUFFER_BIT,F.NEAREST)):oe?F.copyTexSubImage3D(St,N,Mt,Wt,te+Wn,_t,Dt,at,ot):F.copyTexSubImage2D(St,N,Mt,Wt,te+Wn,_t,Dt,at,ot);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else oe?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(St,N,Mt,Wt,te,at,ot,vt,Ae,qt,ee.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(St,N,Mt,Wt,te,at,ot,vt,Ae,ee.data):F.texSubImage3D(St,N,Mt,Wt,te,at,ot,vt,Ae,qt,ee):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,N,Mt,Wt,at,ot,Ae,qt,ee.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,N,Mt,Wt,ee.width,ee.height,Ae,ee.data):F.texSubImage2D(F.TEXTURE_2D,N,Mt,Wt,at,ot,Ae,qt,ee);F.pixelStorei(F.UNPACK_ROW_LENGTH,Re),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Yt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ii),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ke),N===0&&U.generateMipmaps&&F.generateMipmap(St),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,U,X=null,q=null,N=0){return E.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,X,q,N)},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){T=0,b=0,P=null,Ct.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var Ur=class extends Xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var nl=class extends We{constructor(t=null,e=1,n=1,i,r,a,o,l,c=Ge,h=Ge,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends Ot{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},qi=new se,Xc=new se,or=[],qc=new Ln,U0=new se,bs=new Jt,Ss=new Dn,Fr=class extends Jt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,U0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),qc.copy(t.boundingBox).applyMatrix4(qi),this.boundingBox.union(qc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,qi),Ss.copy(t.boundingSphere).applyMatrix4(qi),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(n),t.ray.intersectsSphere(Ss)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,qi),Xc.multiplyMatrices(n,qi),bs.matrixWorld=Xc,bs.raycast(t,or);for(let a=0,o=or.length;a<o;a++){let l=or[a];l.instanceId=r,l.object=this,e.push(l)}or.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new nl(new Float32Array(i*this.count),i,this.count,Sl,dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var il=class extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},zr=new O,Or=new O,Yc=new se,ws=new Cs,lr=new Dn,Ja=new O,Zc=new O,sl=class extends Xe{constructor(t=new me,e=new il){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zr.fromBufferAttribute(e,i-1),Or.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zr.distanceTo(Or);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(i),lr.radius+=r,t.ray.intersectsSphere(lr)===!1)return;Yc.copy(i).invert(),ws.copy(t.ray).applyMatrix4(Yc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let m=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let x=m,g=d-1;x<g;x+=c){let p=h.getX(x),w=h.getX(x+1),_=cr(this,t,ws,l,p,w);_&&e.push(_)}if(this.isLineLoop){let x=h.getX(d-1),g=h.getX(m),p=cr(this,t,ws,l,x,g);p&&e.push(p)}}else{let m=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let x=m,g=d-1;x<g;x+=c){let p=cr(this,t,ws,l,x,x+1);p&&e.push(p)}if(this.isLineLoop){let x=cr(this,t,ws,l,d-1,m);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function cr(s,t,e,n,i,r){let a=s.geometry.attributes.position;if(zr.fromBufferAttribute(a,i),Or.fromBufferAttribute(a,r),e.distanceSqToSegment(zr,Or,Ja,Zc)>n)return;Ja.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ja);if(!(l<t.near||l>t.far))return{distance:l,point:Zc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var $c=new O,Jc=new O,Br=class extends sl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)$c.fromBufferAttribute(e,i),Jc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$c.distanceTo(Jc);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var rl=class extends ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},jc=new se,al=new Cs,hr=new Dn,ur=new O,kr=class extends Xe{constructor(t=new me,e=new rl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=r,t.ray.intersectsSphere(hr)===!1)return;jc.copy(i).invert(),al.copy(t.ray).applyMatrix4(jc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let d=f,x=m;d<x;d++){let g=c.getX(d);ur.fromBufferAttribute(u,g),Kc(ur,g,l,i,t,e,this)}}else{let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let d=f,x=m;d<x;d++)ur.fromBufferAttribute(u,d),Kc(ur,d,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kc(s,t,e,n,i,r,a){let o=al.distanceSqToPoint(s);if(o<e){let l=new O;al.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Ps=class s extends me{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],f=[],m=[],d=0,x=[],g=n/2,p=0;w(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(m,2));function w(){let v=new O,R=new O,T=0,b=(e-t)/n;for(let P=0;P<=r;P++){let M=[],y=P/r,A=y*(e-t)+t;for(let L=0;L<=i;L++){let I=L/i,z=I*l+o,Y=Math.sin(z),B=Math.cos(z);R.x=A*Y,R.y=-y*n+g,R.z=A*B,u.push(R.x,R.y,R.z),v.set(Y,b,B).normalize(),f.push(v.x,v.y,v.z),m.push(I,1-y),M.push(d++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){let y=x[M][P],A=x[M+1][P],L=x[M+1][P+1],I=x[M][P+1];(t>0||M!==0)&&(h.push(y,A,I),T+=3),(e>0||M!==r-1)&&(h.push(A,L,I),T+=3)}c.addGroup(p,T,0),p+=T}function _(v){let R=d,T=new jt,b=new O,P=0,M=v===!0?t:e,y=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*y,0),f.push(0,y,0),m.push(.5,.5),d++;let A=d;for(let L=0;L<=i;L++){let z=L/i*l+o,Y=Math.cos(z),B=Math.sin(z);b.x=M*B,b.y=g*y,b.z=M*Y,u.push(b.x,b.y,b.z),f.push(0,y,0),T.x=Y*.5+.5,T.y=B*.5*y+.5,m.push(T.x,T.y),d++}for(let L=0;L<i;L++){let I=R+L,z=A+L;v===!0?h.push(z,z+1,I):h.push(z+1,z,I),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ss=class s extends Ps{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var N0={triangulate:function(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Sh(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,m;if(n&&(r=k0(s,t,r,e)),s.length>80*e){o=c=s[0],l=h=s[1];for(let d=e;d<i;d+=e)u=s[d],f=s[d+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);m=Math.max(c-o,h-l),m=m!==0?32767/m:0}return Is(r,a,e,o,l,m,0),a}};function Sh(s,t,e,n,i){let r,a;if(i===j0(s,t,e,n)>0)for(r=t;r<e;r+=n)a=Qc(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=Qc(r,s[r],s[r+1],a);return a&&Yr(a,a.next)&&(Ds(a),a=a.next),a}function Ti(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||he(e.prev,e,e.next)===0)){if(Ds(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(s,t,e,n,i,r,a){if(!s)return;!a&&r&&X0(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?z0(s,n,i,r):F0(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Ds(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=O0(Ti(s),t,e),Is(s,t,e,n,i,r,2)):a===2&&B0(s,t,e,n,i,r):Is(Ti(s),t,e,n,i,r,1);break}}}function F0(s){let t=s.prev,e=s,n=s.next;if(he(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,d=n.next;for(;d!==t;){if(d.x>=h&&d.x<=f&&d.y>=u&&d.y<=m&&Zi(i,o,r,l,a,c,d.x,d.y)&&he(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function z0(s,t,e,n){let i=s.prev,r=s,a=s.next;if(he(i,r,a)>=0)return!1;let o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,m=o<l?o<c?o:c:l<c?l:c,d=h<u?h<f?h:f:u<f?u:f,x=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,p=ol(m,d,t,e,n),w=ol(x,g,t,e,n),_=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=w;){if(_.x>=m&&_.x<=x&&_.y>=d&&_.y<=g&&_!==i&&_!==a&&Zi(o,h,l,u,c,f,_.x,_.y)&&he(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=m&&v.x<=x&&v.y>=d&&v.y<=g&&v!==i&&v!==a&&Zi(o,h,l,u,c,f,v.x,v.y)&&he(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=m&&_.x<=x&&_.y>=d&&_.y<=g&&_!==i&&_!==a&&Zi(o,h,l,u,c,f,_.x,_.y)&&he(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=w;){if(v.x>=m&&v.x<=x&&v.y>=d&&v.y<=g&&v!==i&&v!==a&&Zi(o,h,l,u,c,f,v.x,v.y)&&he(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function O0(s,t,e){let n=s;do{let i=n.prev,r=n.next.next;!Yr(i,r)&&wh(i,n,n.next,r)&&Ls(i,r)&&Ls(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Ds(n),Ds(n.next),n=s=r),n=n.next}while(n!==s);return Ti(n)}function B0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Z0(a,o)){let l=Eh(a,o);a=Ti(a,a.next),l=Ti(l,l.next),Is(a,t,e,n,i,r,0),Is(l,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function k0(s,t,e,n){let i=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:s.length,c=Sh(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Y0(c));for(i.sort(H0),r=0;r<i.length;r++)e=V0(i[r],e);return e}function H0(s,t){return s.x-t.x}function V0(s,t){let e=G0(s,t);if(!e)return t;let n=Eh(e,s);return Ti(n,n.next),Ti(e,e.next)}function G0(s,t){let e=t,n=-1/0,i,r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===r))return i}e=e.next}while(e!==t);if(!i)return null;let o=i,l=i.x,c=i.y,h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&Zi(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),Ls(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&W0(i,e)))&&(i=e,h=u)),e=e.next;while(e!==o);return i}function W0(s,t){return he(s.prev,s,t.prev)<0&&he(t.next,s,s.next)<0}function X0(s,t,e,n){let i=s;do i.z===0&&(i.z=ol(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,q0(i)}function q0(s){let t,e,n,i,r,a,o,l,c=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(a>1);return s}function ol(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Y0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Zi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function Z0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!$0(s,t)&&(Ls(s,t)&&Ls(t,s)&&J0(s,t)&&(he(s.prev,s,t.prev)||he(s,t.prev,t))||Yr(s,t)&&he(s.prev,s,s.next)>0&&he(t.prev,t,t.next)>0)}function he(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Yr(s,t){return s.x===t.x&&s.y===t.y}function wh(s,t,e,n){let i=dr(he(s,t,e)),r=dr(he(s,t,n)),a=dr(he(e,n,s)),o=dr(he(e,n,t));return!!(i!==r&&a!==o||i===0&&fr(s,e,t)||r===0&&fr(s,n,t)||a===0&&fr(e,s,n)||o===0&&fr(e,t,n))}function fr(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function dr(s){return s>0?1:s<0?-1:0}function $0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wh(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ls(s,t){return he(s.prev,s,s.next)<0?he(s,t,s.next)>=0&&he(s,s.prev,t)>=0:he(s,t,s.prev)<0||he(s,s.next,t)<0}function J0(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Eh(s,t){let e=new ll(s.i,s.x,s.y),n=new ll(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Qc(s,t,e,n){let i=new ll(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ds(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function ll(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function j0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Hr=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];th(t),eh(n,t);let a=t.length;e.forEach(th);for(let l=0;l<e.length;l++)i.push(a),a+=e[l].length,eh(n,e[l]);let o=N0.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function th(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function eh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Vr=class s extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new O,f=new O,m=[],d=[],x=[],g=[];for(let p=0;p<=n;p++){let w=[],_=p/n,v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let T=R/e;u.x=-t*Math.cos(i+T*r)*Math.sin(a+_*o),u.y=t*Math.cos(a+_*o),u.z=t*Math.sin(i+T*r)*Math.sin(a+_*o),d.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+v,1-_),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){let _=h[p][w+1],v=h[p][w],R=h[p+1][w],T=h[p+1][w+1];(p!==0||a>0)&&m.push(_,v,T),(p!==n-1||l<Math.PI)&&m.push(v,R,T)}this.setIndex(m),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(x,3)),this.setAttribute("uv",new Ce(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function pr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function K0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var rs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},cl=class extends rs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jl:r=t,o=2*e-n;break;case jl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jl:a=t,l=2*n-e;break;case jl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,d=(n-e)/(i-e),x=d*d,g=x*d,p=-f*g+2*f*x-f*d,w=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*d+1,_=(-1-m)*g+(1.5+m)*x+.5*d,v=m*g-m*x;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+w*a[c+R]+_*a[l+R]+v*a[u+R];return r}},hl=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},ul=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},an=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(e,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case yr:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case Ma:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yr;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&K0(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ma,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,f=u-n,m=u+n;for(let d=0;d!==n;++d){let x=e[u+d];if(x!==e[f+d]||x!==e[m+d]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=zo;var Ai=class extends an{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=yr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends an{};fl.prototype.ValueTypeName="color";var dl=class extends an{};dl.prototype.ValueTypeName="number";var pl=class extends rs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Gr=class extends an{InterpolantFactoryMethodLinear(t){return new pl(this.times,this.values,this.getValueSize(),t)}};Gr.prototype.ValueTypeName="quaternion";Gr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends an{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=yr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends an{};ml.prototype.ValueTypeName="vector";var gl=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],d=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return d}return null}}},Q0=new gl,xl=class{constructor(t){this.manager=t!==void 0?t:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rl="\\[\\]\\.:\\/",tg=new RegExp("["+Rl+"]","g"),Cl="[^"+Rl+"]",eg="[^"+Rl.replace("\\.","")+"]",ng=/((?:WC+[\/:])*)/.source.replace("WC",Cl),ig=/(WCOD+)?/.source.replace("WCOD",eg),sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cl),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cl),ag=new RegExp("^"+ng+ig+sg+rg+"$"),og=["material","materials","bones","map"],vl=class{constructor(t,e,n){let i=n||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ce=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tg,"")}static parseTrackName(t){let e=ag.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);og.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=vl;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tg=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_l}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_l);var Nn="0.2.1";var ai={index:null,buf:null,geo:{}};async function Th(s){let[t,e]=await Promise.all([fetch("assets/models.json?v="+Nn).then(n=>n.json()),lg("assets/models.bin?v="+Nn,s)]);ai.index=t,ai.buf=e}async function lg(s,t){let e=await fetch(s);if(!e.ok)throw new Error(s+" "+e.status);if(!t||!e.body||!e.headers.get("content-length"))return e.arrayBuffer();let n=+e.headers.get("content-length"),i=e.body.getReader(),r=[],a=0;for(;;){let{done:c,value:h}=await i.read();if(c)break;r.push(h),a+=h.length,t(Math.min(.99,a/n))}let o=new Uint8Array(a),l=0;for(let c of r)o.set(c,l),l+=c.length;return t(1),o.buffer}function Pl(s,t){let e=ai.index[s],n=e.parts.find(r=>r.name===t)||e.parts[0],i=ai.buf;return{part:n,pos:new Float32Array(i,n.pos,n.n*3),nrm:new Int8Array(i,n.nrm,n.n*4),col:new Uint8Array(i,n.col,n.n*4),idx:new Uint16Array(i,n.idx,n.i)}}function Ci(s,t){let e=s+"/"+t;if(ai.geo[e])return ai.geo[e];let n=Pl(s,t),i=new me;return i.setAttribute("position",new Ot(n.pos,3)),i.setAttribute("normal",new Ot(n.nrm,4,!0)),i.setAttribute("col",new Ot(n.col,4,!0)),i.setIndex(new Ot(n.idx,1)),i.computeBoundingSphere(),ai.geo[e]=i,i}function Il(s){return ai.index[s]}var cg=["impactMetal_heavy_000","impactMetal_heavy_001","impactMetal_heavy_002","impactMetal_light_000","impactGlass_heavy_000","impactPlate_heavy_000","select_001","confirmation_001","back_001","switch_001","explosionCrunch_000","forceField_000"],Zr=class{constructor(t){this.vol={music:t.music??.7,sfx:t.sfx??.8},this.mix={engine:1,sfx:1,music:1},this.ctx=null,this.buf={},this.engines=[],this.music=null,this.musicName=""}start(){if(this.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=this.ctx=new t;this.master=e.createGain(),this.master.gain.value=this.vol.sfx,this.master.connect(e.destination);let n=e.createBuffer(1,e.sampleRate,e.sampleRate),i=n.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;this.noise=n,this.worklet=null,e.audioWorklet&&(this.worklet=e.audioWorklet.addModule("assets/engine-worklet.js?v="+Nn).then(()=>!0).catch(()=>!1));for(let r of cg)fetch("assets/sfx/"+r+".ogg?v="+Nn).then(a=>a.arrayBuffer()).then(a=>e.decodeAudioData(a)).then(a=>{this.buf[r]=a}).catch(()=>{});this.playMusic("alpha-dance")}noiseSrc(){let t=this.ctx.createBufferSource();return t.buffer=this.noise,t.loop=!0,t}playMusic(t){if(this.musicName===t)return;this.musicName=t,this.music||(this.music=new Audio,this.music.loop=!0),this.music.src="assets/music/"+t+".ogg?v="+Nn,this.music.volume=this.vol.music*.45*this.mix.music;let e=this.music.play();e&&e.catch&&e.catch(()=>{})}volume(t){this.vol={music:t.music??this.vol.music,sfx:t.sfx??this.vol.sfx},this.master&&(this.master.gain.value=this.vol.sfx),this.music&&(this.music.volume=this.vol.music*.45*this.mix.music)}setMix(t){this.mix={engine:t.engine??1,sfx:t.sfx??1,music:t.music??1},this.volume({})}play(t,e,n){let i=this.buf[t];if(!i||!this.ctx)return;let r=this.ctx.createBufferSource();r.buffer=i,r.playbackRate.value=n||1;let a=this.ctx.createGain();a.gain.value=(e===void 0?1:e)*this.mix.sfx,r.connect(a),a.connect(this.master),r.start()}ui(t){this.play(t==="ok"?"confirmation_001":t==="back"?"back_001":t==="switch"?"switch_001":"select_001",.5)}engineNode(t,e){let n=this.ctx;if(this.workletOk){let i=new AudioWorkletNode(n,"engine",{numberOfInputs:0,outputChannelCount:[1],processorOptions:{cyl:t.cyl||4,turbo:!!t.turbo,ev:!!t.ev,diesel:!!t.diesel,rpmMax:t.rpm,seed:e}}),r=i.parameters;return{node:i,rpm:r.get("rpm"),load:r.get("load"),speed:r.get("speed"),gain:r.get("gain"),nodes:[]}}return null}engineVoice(t,e){let n=this.ctx,i=t?this.engineNode(t,e||1):null,r=n.createOscillator();r.type="sawtooth";let a=n.createOscillator();a.type="square";let o=this.noiseSrc(),l=n.createGain();l.gain.value=.12;let c=n.createBiquadFilter();c.type="lowpass",c.Q.value=3;let h=n.createGain();h.gain.value=0;let u=n.createGain();u.gain.value=.5,r.connect(c),a.connect(u),u.connect(c),o.connect(l),l.connect(c),c.connect(h);let f=this.noiseSrc(),m=n.createBiquadFilter();m.type="bandpass",m.frequency.value=1700,m.Q.value=4;let d=n.createGain();d.gain.value=0,f.connect(m),m.connect(d);let x=this.noiseSrc(),g=n.createBiquadFilter();g.type="lowpass",g.frequency.value=500;let p=n.createGain();p.gain.value=0,x.connect(g),g.connect(p);let w=this.noiseSrc(),_=n.createBiquadFilter();_.type="bandpass",_.frequency.value=900,_.Q.value=.8;let v=n.createGain();v.gain.value=0,w.connect(_),_.connect(v);let R=n.createStereoPanner?n.createStereoPanner():null,T=R||n.createGain();return i?i.node.connect(T):h.connect(T),d.connect(T),p.connect(T),v.connect(T),T.connect(this.master),i||(r.start(),a.start(),o.start()),f.start(),x.start(),w.start(),{wk:i,spec:t,o1:r,o2:a,f:c,g:h,tg:d,wg:p,ngn:v,nf:_,pan:R,nodes:i?[f,x,w]:[r,a,o,f,x,w],out:T}}async begin(t){if(!this.ctx||(this.end(),this.cur=t,this.worklet&&(this.workletOk=await this.worklet),this.cur!==t||this.engines.length))return;let e=t.race.players.length;for(let n=0;n<e;n++){let i=this.engineVoice(t.race.players[n].spec,n+1);i.pan&&(i.pan.pan.value=e>1?n?.5:-.5:0),this.engines.push(i)}this.rivals=[];for(let n of t.race.racers)n.player>=0||this.rivals.length>=3||this.rivals.some(i=>i.spec===n.spec)||this.rivals.push(this.engineVoice(n.spec,7+this.rivals.length));this.playMusic("time-driving")}update(t,e){if(!this.ctx||!this.engines.length)return;let n=this.ctx.currentTime,i=t.race,r=i.players.length>1?.6:1;for(let o=0;o<this.engines.length;o++){let l=this.engines[o],c=i.players[o],h=c.veh;this.voice(l,h,c,n,r,1)}let a=i.players[0].veh;for(let o=0;o<this.rivals.length;o++){let l=this.rivals[o],c=null,h=1e9;for(let u=0;u<i.racers.length;u++){let f=i.racers[u];if(f.player>=0||f.spec!==l.spec)continue;let m=Math.hypot(f.veh.px-a.px,f.veh.pz-a.pz);m<h&&(h=m,c=f)}c&&this.voice(l,c.veh,c,n,r*Math.max(0,1-h/60)*.6,0)}}voice(t,e,n,i,r,a){let o=e.rpm,l=Math.max(e.input.throttle,e.nitroOn?1:0),c=n.wreck>0;if(t.wk){let f=c?0:e.shiftT>0?.04:l;t.wk.rpm.setValueAtTime(c?800:o,i),t.wk.load.setValueAtTime(f,i),t.wk.speed.setValueAtTime(a?e.speed:0,i),t.wk.gain.setTargetAtTime((c?.15*r:(e.spec.ev?.9:.55+.25*f)*r)*this.mix.engine,i,.05)}let h=28+o/60*1.6;t.o1.frequency.setTargetAtTime(h,i,.03),t.o2.frequency.setTargetAtTime(h*.5,i,.03),t.f.frequency.setTargetAtTime(300+o*.32*(.5+l*.5),i,.05),t.g.gain.setTargetAtTime((c?.02:(.1+l*.14)*r)*this.mix.engine,i,.05);let u=0;for(let f=0;f<4;f++){let m=e.wheels[f];m.contact&&(u=Math.max(u,m.slipLat,m.slipLong))}t.tg.gain.setTargetAtTime(u>.3&&e.speed>5?Math.min(.22,(u-.3)*.4)*r*this.mix.sfx:0,i,.04),t.wg.gain.setTargetAtTime(a?Math.min(.18,e.speed*e.speed*2e-5)*r*this.mix.sfx:0,i,.1),t.ngn.gain.setTargetAtTime(e.nitroOn?.16*r*Math.min(1.6,e.nitroOn)*this.mix.sfx:0,i,.06),t.nf.frequency.setTargetAtTime(e.nitroOn>1.5?600:1100,i,.1)}event(t,e,n,i){if(!this.ctx)return;let a=e.player>=0;if(!a)for(let o of i.race.players)Math.hypot(o.veh.px-e.veh.px,o.veh.pz-e.veh.pz)<50&&(a=!0);if(a)if(t==="hit"){let o=this.ctx.currentTime;if(o-(this.lastHit||0)<.12)return;this.lastHit=o;let l=Math.min(1,n/18);if(l<.1)return;this.play(l>.5?"impactMetal_heavy_00"+(Math.random()*3|0):"impactMetal_light_000",.4+l*.6,.9+Math.random()*.2)}else t==="wreck"&&(this.play("explosionCrunch_000",.9,.8),this.play("impactGlass_heavy_000",.7),this.play("impactPlate_heavy_000",.8,.85))}drop(t){for(let e of t.nodes)try{e.stop()}catch{}t.wk&&t.wk.node.disconnect(),t.out.disconnect()}end(){for(let t of this.engines.concat(this.rivals||[]))this.drop(t);this.engines=[],this.rivals=[],this.cur=null,this.ctx&&this.playMusic("alpha-dance")}pause(){this.ctx&&this.ctx.suspend(),this.music&&this.music.pause()}resume(){if(this.ctx&&this.ctx.resume(),this.music){let t=this.music.play();t&&t.catch&&t.catch(()=>{})}}close(){this.end(),this.music&&(this.music.pause(),this.music.src=""),this.ctx&&this.ctx.close(),this.ctx=null}};var oi=16,de=3.5,hg=3.25,$r=class s{static async load(t){let e=(l,c)=>fetch("assets/city/"+l+"?v="+Nn).then(h=>{if(!h.ok)throw new Error(l+" "+h.status);return c?h.arrayBuffer():h.json()}),[n,i,r,a,o]=await Promise.all([e("city.json"),e("net.bin",1),e("ground.bin",1),e("bld.bin",1),e("side.bin",1)]);return t&&t(1),new s(n,i,r,a,o)}constructor(t,e,n,i,r){this.meta=t,this.box=t.box;let a=new Float32Array(e),o=this.n=a.length/3;this.px=new Float32Array(o),this.py=new Float32Array(o),this.pz=new Float32Array(o);for(let d=0;d<o;d++)this.px[d]=a[d*3],this.py[d]=a[d*3+1],this.pz[d]=a[d*3+2];let l=new Uint8Array(r);this.pl=new Float32Array(o),this.pr=new Float32Array(o);for(let d=0;d<o;d++)this.pl[d]=l[d*2]/40,this.pr[d]=l[d*2+1]/40;let c=t.edges,h=this.ne=c.length;this.eOff=new Int32Array(h),this.eN=new Int32Array(h),this.eA=new Int32Array(h),this.eB=new Int32Array(h),this.eHw=new Float32Array(h),this.eCls=new Uint8Array(h),this.eOne=new Uint8Array(h),this.eRa=new Uint8Array(h),this.eLim=new Uint8Array(h),this.eName=new Int32Array(h),this.eLen=new Float32Array(h),this.sE=new Int32Array(o),this.sS=new Float32Array(o),this.tx=new Float32Array(o),this.tz=new Float32Array(o),this.sJ=new Int32Array(o).fill(-1);let u=t.junctions,f=this.nj=u.length;this.jx=new Float32Array(f),this.jz=new Float32Array(f),this.jr=new Float32Array(f),this.jy=new Float32Array(f),this.jEdges=[];for(let d=0;d<f;d++)this.jx[d]=u[d][0],this.jz[d]=u[d][1],this.jr[d]=u[d][2],this.jy[d]=u[d][3],this.jEdges.push([]);for(let d=0;d<h;d++){let x=c[d];this.eOff[d]=x[1],this.eN[d]=x[2],this.eA[d]=x[3],this.eB[d]=x[4],this.eHw[d]=x[5],this.eCls[d]=x[6],this.eOne[d]=x[7],this.eRa[d]=x[8],this.eLim[d]=x[9],this.eName[d]=x[10],this.jEdges[x[3]].push(d),this.jEdges[x[4]].push(d);let g=x[1],p=x[2],w=0;for(let R=0;R<p;R++){let T=g+R;this.sE[T]=d,R>0&&(w+=Math.hypot(this.px[T]-this.px[T-1],this.pz[T]-this.pz[T-1])),this.sS[T]=w;let b=R>0?T-1:T,P=R<p-1?T+1:T,M=this.px[P]-this.px[b],y=this.pz[P]-this.pz[b],A=Math.hypot(M,y)||1;this.tx[T]=M/A,this.tz[T]=y/A}this.eLen[d]=w;let _=this.jr[x[3]],v=this.jr[x[4]];for(let R=0;R<p;R++){let T=g+R,b=this.sS[T];b<_+2?this.sJ[T]=x[3]:w-b<v+2&&(this.sJ[T]=x[4])}}this.lights=t.lights,this.stations=t.stations,this.names=t.names,this.areas=t.areas||[],this.jLight=new Int32Array(f).fill(-1);for(let d=0;d<this.lights.length;d++)this.jLight[this.lights[d].j]=d;this.buildGrid();let m=new Float32Array(n,0,5);this.g={x0:m[0],z0:m[1],c:m[2],nx:m[3]|0,nz:m[4]|0,h:new Int16Array(n,20,(m[3]|0)*(m[4]|0))},this.bld=new Float32Array(i)}buildGrid(){let t=this.box;this.gx0=t.x0-64,this.gz0=t.z0-64;let e=this.gnx=Math.ceil((t.x1-t.x0+128)/oi),n=this.gnz=Math.ceil((t.z1-t.z0+128)/oi),i=new Int32Array(e*n+1),r=l=>{for(let c=0;c<this.n-1;c++){let h=this.sE[c];if(this.sE[c+1]!==h)continue;let u=this.eHw[h]+de+9,f=Math.min(this.px[c],this.px[c+1])-u,m=Math.max(this.px[c],this.px[c+1])+u,d=Math.min(this.pz[c],this.pz[c+1])-u,x=Math.max(this.pz[c],this.pz[c+1])+u,g=Math.max(0,Math.floor((f-this.gx0)/oi)),p=Math.min(e-1,Math.floor((m-this.gx0)/oi)),w=Math.max(0,Math.floor((d-this.gz0)/oi)),_=Math.min(n-1,Math.floor((x-this.gz0)/oi));for(let v=w;v<=_;v++)for(let R=g;R<=p;R++)l(v*e+R,c)}};r(l=>i[l+1]++);for(let l=0;l<e*n;l++)i[l+1]+=i[l];let a=i.slice(0,e*n),o=new Int32Array(i[e*n]);r((l,c)=>{o[a[l]++]=c}),this.cellStart=i,this.cellList=o}groundAt(t,e){let n=this.g,i=(t-n.x0)/n.c,r=(e-n.z0)/n.c,a=Math.max(0,Math.min(n.nx-2,Math.floor(i))),o=Math.max(0,Math.min(n.nz-2,Math.floor(r))),l=Math.max(0,Math.min(1,i-a)),c=Math.max(0,Math.min(1,r-o)),h=n.h,u=n.nx;return((h[o*u+a]*(1-l)+h[o*u+a+1]*l)*(1-c)+(h[(o+1)*u+a]*(1-l)+h[(o+1)*u+a+1]*l)*c)/10}query(t,e,n,i){let r=Math.floor((t-this.gx0)/oi),a=Math.floor((e-this.gz0)/oi),o=-1,l=1e9,c=0,h=n>=0&&n<this.n?this.sE[n]:-1;if(r>=0&&a>=0&&r<this.gnx&&a<this.gnz){let it=a*this.gnx+r,ht=this.cellList;for(let bt=this.cellStart[it],xt=this.cellStart[it+1];bt<xt;bt++){let W=ht[bt],et=this.px[W],gt=this.pz[W],ct=this.px[W+1]-et,Et=this.pz[W+1]-gt,It=ct*ct+Et*Et||1,Pt=((t-et)*ct+(e-gt)*Et)/It;Pt<0?Pt=0:Pt>1&&(Pt=1);let Qt=et+ct*Pt-t,kt=gt+Et*Pt-e,F=Math.sqrt(Qt*Qt+kt*kt)-this.eHw[this.sE[W]];this.sE[W]===h&&(F-=.05),F<l&&(l=F,o=W,c=Pt)}}if(o<0)return i.i=0,i.t=0,i.s=0,i.d=1e3,i.y=this.groundAt(t,e),i.nx=0,i.ny=1,i.nz=0,i.hl=i.hr=0,i.wall=1e9,i.off=2,i.lx=1,i.lz=0,i.fx=0,i.fz=1,i.edge=-1,i.junc=-1,i.lim=50,i;let u=o,f=this.sE[u],m=this.px[u],d=this.pz[u],x=this.px[u+1]-m,g=this.pz[u+1]-d,p=Math.hypot(x,g)||1,w=c,_=g/p,v=-x/p,R=(t-(m+x*w))*_+(e-(d+g*w))*v,T=this.eHw[f],b=this.py[u]+(this.py[u+1]-this.py[u])*w,P=(this.py[u+1]-this.py[u])/p,M=0,y=0,A=this.sJ[u];if(A>=0){let it=t-this.jx[A],ht=e-this.jz[A];it*it+ht*ht>(this.jr[A]+3)**2&&(A=-1)}let L=R>=0?R-T:-R-T,I=R>=0?this.pl[u]+(this.pl[u+1]-this.pl[u])*w:this.pr[u]+(this.pr[u+1]-this.pr[u])*w;if(L>0&&A<0){if(y=1,I>.6){let it=L<.4?L/.4:1;b+=.15*it,L<.4&&(M=(R>=0?1:-1)*.15/.4)}L>I&&(y=2)}i.wall=I>=de-.05?T+hg:1e9;let z=x/p,Y=g/p,B=M*Y-v*P,Z=v*z-_*Y,H=_*P-M*z;Z<0&&(B=-B,Z=-Z,H=-H);let tt=Math.hypot(B,Z,H)||1;return i.i=u,i.t=w,i.s=this.sS[u]+w*p,i.d=R,i.y=b,i.nx=B/tt,i.ny=Z/tt,i.nz=H/tt,i.hl=T,i.hr=T,i.off=y,i.lx=_,i.lz=v,i.fx=z,i.fz=Y,i.edge=f,i.junc=A,i.lim=this.eLim[f],i}at(t,e,n,i){let r=this.eOff[t],a=this.eN[t];e<0&&(e=0),e>this.eLen[t]&&(e=this.eLen[t]);let o=0,l=a-1;for(;l-o>1;){let g=o+l>>1;this.sS[r+g]<=e?o=g:l=g}let c=r+o,h=Math.min(r+a-1,c+1),u=this.sS[h]-this.sS[c]||1,f=Math.max(0,Math.min(1,(e-this.sS[c])/u)),m=this.tx[c]+(this.tx[h]-this.tx[c])*f,d=this.tz[c]+(this.tz[h]-this.tz[c])*f,x=Math.hypot(m,d)||1;return i.fx=m/x,i.fz=d/x,i.lx=i.fz,i.lz=-i.fx,i.x=this.px[c]+(this.px[h]-this.px[c])*f+i.lx*n,i.z=this.pz[c]+(this.pz[h]-this.pz[c])*f+i.lz*n,i.y=this.py[c]+(this.py[h]-this.py[c])*f,i.i=c,i.hw=this.eHw[t],i}canLeave(t,e){return!this.eOne[t]||this.eA[t]===e}other(t,e){return this.eA[t]===e?this.eB[t]:this.eA[t]}route(t,e,n,i,r){let a=this.nj;this._dist||(this._dist=new Float64Array(a),this._prev=new Int32Array(a),this._pe=new Int32Array(a));let o=this._dist,l=this._prev,c=this._pe;o.fill(1/0),l.fill(-1),c.fill(-1);let h=[],u=(P,M)=>{h.push(P,M);let y=h.length/2-1;for(;y>0;){let A=y-1>>1;if(h[A*2]<=h[y*2])break;let L=h[A*2],I=h[A*2+1];h[A*2]=h[y*2],h[A*2+1]=h[y*2+1],h[y*2]=L,h[y*2+1]=I,y=A}},f=()=>{let P=h[0],M=h[1],y=h[h.length-2],A=h[h.length-1];if(h.length-=2,h.length){h[0]=y,h[1]=A;let L=0,I=h.length/2;for(;;){let z=2*L+1,Y=z+1,B=L;if(z<I&&h[z*2]<h[B*2]&&(B=z),Y<I&&h[Y*2]<h[B*2]&&(B=Y),B===L)break;let Z=h[B*2],H=h[B*2+1];h[B*2]=h[L*2],h[B*2+1]=h[L*2+1],h[L*2]=Z,h[L*2+1]=H,L=B}}return[P,M]},m=this.eLen[t],d=n>0?this.eB[t]:this.eA[t],x=n>0?this.eA[t]:this.eB[t],g=n>0?m-e:e;o[d]=g,u(g,d),c[d]=t,!this.eOne[t]&&o[x]>m-g+60&&(o[x]=m-g+60,u(o[x],x),c[x]=t);let p=1/0;if(i===t){let P=(r-e)*n;P>=0&&(p=P)}let w=this.eA[i],_=this.eB[i],v=this.eLen[i];for(;h.length;){let[P,M]=f();if(!(P>o[M])){if(P>p)break;for(let y of this.jEdges[M]){if(!this.canLeave(y,M))continue;let A=this.other(y,M),L=P+this.eLen[y]*(this.eCls[y]>=5?1.15:1);L<o[A]&&(o[A]=L,l[A]=M,c[A]=y,u(L,A))}}}let R=-1,T=p;if(o[w]+r<T&&this.canLeave(i,w)&&(T=o[w]+r,R=w),o[_]+(v-r)<T&&(!this.eOne[i]||this.eA[i]===_)&&(T=o[_]+(v-r),R=_),T===1/0)return null;let b=[];if(R>=0){b.push([i,R===w?1:-1]);let P=R;for(let M=0;M<5e3&&l[P]>=0;M++){let y=c[P],A=l[P];b.push([y,this.eA[y]===A&&this.eB[y]===P?1:-1]),P=A}b.push([t,P===this.eB[t]?1:-1]),b.reverse()}else b.push([t,n]);return{len:T,edges:b}}project(t,e,n,i){let r=this.eOff[t],a=this.eN[t],o=Math.max(0,Math.min(a-2,Math.round(e/4)));for(;o>0&&this.sS[r+o]>e;)o--;let l=e,c=1e18;for(let h=Math.max(0,o-3);h<=Math.min(a-2,o+3);h++){let u=r+h,f=this.px[u],m=this.pz[u],d=this.px[u+1]-f,x=this.pz[u+1]-m,g=d*d+x*x||1,p=((n-f)*d+(i-m)*x)/g;p=p<0?0:p>1?1:p;let w=f+d*p-n,_=m+x*p-i,v=w*w+_*_;v<c&&(c=v,l=this.sS[u]+p*Math.sqrt(g))}return l}slot(t,e){return this.jEdges[e].indexOf(t)}edgeName(t,e){return this.nameText(this.eName[t],e)}areaName(t,e,n){let i=-1,r=1e18;for(let a=0;a<this.areas.length;a++){let o=this.areas[a],l=Math.hypot(o[0]-t,o[1]-e)/o[3];l<r&&(r=l,i=a)}return i>=0&&r<1400?this.nameText(this.areas[i][2],n):""}nameText(t,e){let n=this.names[t];return n?e==="ar"?n[1]||n[0]:n[0].replace(/[\u0600-\u06FF\u0750-\u077F\u2D30-\u2D7F]+/g,"").replace(/\s+/g," ").trim()||n[0]:""}};var je={city:{model:"car_city",cls:"D",mass:1090,power:110,torque:250,rpm:6300,gears:[3.42,2,1.42,1.1,.9,.76],final:4.05,cda:.66,cl:.04,mu:1.06,steer:.64,nitro:4.2,drive:"f",turbo:1,cyl:3,shift:.28},hatch:{model:"car_hatch",cls:"D",mass:1235,power:96,torque:230,rpm:6200,gears:[3.42,1.95,1.36,1.05,.87,.73],final:4.05,cda:.64,cl:.03,mu:1,steer:.62,nitro:3.6,drive:"f",turbo:1,cyl:3,shift:.45},volt:{model:"car_volt",cls:"C",mass:1920,power:366,torque:510,rpm:16500,gears:[1],final:9,cda:.5,cl:.04,mu:1.04,steer:.58,nitro:7,drive:"a",ev:1},suvlux:{model:"car_suvlux",cls:"C",mass:2250,power:300,torque:620,rpm:6500,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.3,cda:1.05,cl:.03,mu:1,steer:.56,nitro:8,drive:"a",turbo:1,cyl:8},wedge:{model:"car_wedge",cls:"B",mass:3150,power:447,torque:960,rpm:12800,gears:[1],final:9,cda:1,cl:.02,mu:1,steer:.52,nitro:11,drive:"a",ev:1},police:{model:"car_police",cls:"A",mass:1900,power:330,torque:570,rpm:6600,gears:[4.7,3.14,2.1,1.67,1.29,1,.84,.67],final:3.2,cda:.74,cl:.06,mu:1.08,steer:.56,nitro:8.5,drive:"a",turbo:1,cyl:6},gt:{model:"car_gt",cls:"S",mass:1150,power:620,torque:760,rpm:9200,gears:[3,2.1,1.62,1.31,1.1,.94,.82],final:3.3,cda:.7,cl:.7,mu:1.32,steer:.52,nitro:11,drive:"r",cyl:10},t_small:{model:"tr_sedan",cls:"T",mass:1250,power:85,torque:170,rpm:6e3,gears:[3.5,2,1.3,1,.8],final:4,cda:.7,cl:0,mu:.95,steer:.6,nitro:0,drive:"f",cyl:4},t_heavy:{model:"tr_truck",cls:"T",mass:3500,power:120,torque:450,rpm:4e3,gears:[5,3,1.9,1.3,1,.8],final:4.1,cda:1.6,cl:0,mu:.9,steer:.55,nitro:0,drive:"r",cyl:6,diesel:1}};function ug(s){return Math.sin(1.45*Math.atan(14*s))}var os=class{constructor(t,e,n){this.spec=t;let i=Object.assign({engine:0,nitro:0,grip:0,gearbox:0,brakes:0},n);this.up=i,this.power=t.power*(1+.06*i.engine),this.torqueMax=t.torque*(1+.06*i.engine),this.nitroForce=t.nitro*1e3*(1+.08*i.nitro),this.mu=t.mu*(1+.025*i.grip),this.shiftTime=(t.shift||.15)*(1-.13*i.gearbox),this.gearPull=1+.025*i.gearbox,this.brakeGrip=1+.035*i.brakes,this.spinT=0,this.spinDur=.9,this.spinDir=1,this.spinA=0,this.spinDone=!1,this.mass=t.mass,this.invMass=1/t.mass;let r=e.w,a=e.h*.8,o=e.l,l=t.mass;this.Ix=l*(a*a+o*o)/12,this.Iy=l*(r*r+o*o)/12,this.Iz=l*(r*r+a*a)/12,this.half={x:r/2,y:e.h/2,z:o/2},this.cgY=e.cg,this.px=0,this.py=0,this.pz=0,this.vx=0,this.vy=0,this.vz=0,this.qx=0,this.qy=0,this.qz=0,this.qw=1,this.wx=0,this.wy=0,this.wz=0,this.R=new Float32Array(9),this.wheels=[];let c=(e.wheels[0].z+e.wheels[1].z)/2,h=(e.wheels[2].z+e.wheels[3].z)/2,u=t.drive==="r"?.45:t.drive==="f"?.6:.5;this.cgZ=h+u*(c-h);for(let m=0;m<4;m++){let d=e.wheels[m];this.wheels.push({mx:d.x,my:d.y-this.cgY+.18,mz:d.z-this.cgZ,r:d.r,front:m<2,rest:.36,comp:0,prevComp:0,contact:!1,load:0,spin:0,spinAngle:0,steer:0,slipLat:0,slipLong:0,cx:0,cy:0,cz:0,surf:0,hint:0,travel:0})}let f=.11;this.k=t.mass*9.81/4/f,this.c=2*.32*Math.sqrt(this.k*t.mass/4),this.input={throttle:0,brake:0,steer:0,handbrake:0,nitro:0},this.steerNow=0,this.gear=1,this.rpm=t.ev?0:900,this.shiftT=0,this.nitroOn=0,this.grounded=0,this.airTime=0,this.speed=0,this.fwdSpeed=0,this.latSpeed=0,this.hint=0,this.assist={esc:1,tc:1,air:1},this.reverse=!1,this.stopT=0,this.hold=!1,this.wrecked=0,this.topSpeedCap=1e9,this.gearbox=null,this.mgear=1,this.stalled=!1,this.fuelCut=!1,this.clutchE=1,this.input.clutch=0,this.updateR()}manualDrive(t,e,n){let i=this.spec,r=this.input,a=this.mgear;this.shiftT>0&&(this.shiftT-=t),this.reverse=a<0,this.gear=a>0?a:1;let o=a===0?0:(a<0?i.gears[0]*1.08:i.gears[a-1])*i.final,l=Math.max(Math.abs(e)/.34,n)*o*30/Math.PI,c=i.ev?0:850,h=this.stalled||this.fuelCut,u=h?0:r.throttle,f;if(a===0||this.shiftT>0?f=0:this.gearbox==="clutch"?f=1-Math.max(0,Math.min(1,r.clutch)):f=u<.05&&l<c*1.15?0:Math.max(.12,Math.min(1,(l-250)/1150)),this.clutchE=f,h)this.rpm+=(0-this.rpm)*Math.min(1,t*3);else{let x=c+u*(i.rpm*1.02-c),g=f*f,p=Math.max(g>.9?300:c,x*(1-g)+l*g);this.rpm+=(p-this.rpm)*Math.min(1,t*(f>.9?25:7)),this.rpm>i.rpm*1.05&&(this.rpm=i.rpm*1.05)}this.gearbox==="clutch"&&!h&&f>.6&&this.rpm<460&&!i.ev&&(this.stalled=!0),this.stalled&&r.clutch>.9&&!this.fuelCut&&(this.stalled=!1,this.rpm=c);let m=0;!h&&f>0&&(m=this.engineTorque(Math.max(this.rpm,c))*u,u<.05&&l>c*1.1&&(m-=this.torqueMax*.12*(.3+l/i.rpm)),this.rpm>=i.rpm&&m>0&&(m*=.15),m*=f);let d=m*o*.88/.34*this.gearPull;return a<0?-d:d}shift(t){let e=this.spec.gears.length,n=this.mgear+t;return n<-1||n>e?"end":this.gearbox==="clutch"&&this.input.clutch<.6?"clutch":n<0&&this.fwdSpeed>1.5?"moving":n>0&&this.gearbox==="manual"&&Math.abs(this.fwdSpeed)/.34*this.spec.gears[n-1]*this.spec.final*30/Math.PI>this.spec.rpm*1.02?"revs":(this.mgear=n,this.shiftT=this.gearbox==="clutch"?0:this.shiftTime||.2,"")}updateR(){let t=this.qx,e=this.qy,n=this.qz,i=this.qw,r=this.R;r[0]=1-2*(e*e+n*n),r[1]=2*(t*e+n*i),r[2]=2*(t*n-e*i),r[3]=2*(t*e-n*i),r[4]=1-2*(t*t+n*n),r[5]=2*(e*n+t*i),r[6]=2*(t*n+e*i),r[7]=2*(e*n-t*i),r[8]=1-2*(t*t+e*e)}setPose(t,e,n,i){this.px=t,this.py=e,this.pz=n;let r=i/2;this.qx=0,this.qy=Math.sin(r),this.qz=0,this.qw=Math.cos(r),this.vx=this.vy=this.vz=0,this.wx=this.wy=this.wz=0;for(let a of this.wheels)a.comp=a.prevComp=.1,a.spin=0;this.updateR()}yaw(){return Math.atan2(this.R[6],this.R[8])}applyAngular(t,e,n,i){let r=this.R,a=r[0]*t+r[1]*e+r[2]*n,o=r[3]*t+r[4]*e+r[5]*n,l=r[6]*t+r[7]*e+r[8]*n,c=a/this.Ix,h=o/this.Iy,u=l/this.Iz;this.wx+=(r[0]*c+r[3]*h+r[6]*u)*i,this.wy+=(r[1]*c+r[4]*h+r[7]*u)*i,this.wz+=(r[2]*c+r[5]*h+r[8]*u)*i}impulse(t,e,n,i,r,a){this.vx+=t*this.invMass,this.vy+=e*this.invMass,this.vz+=n*this.invMass,this.applyAngular(r*n-a*e,a*t-i*n,i*e-r*t,1)}invMassAt(t,e,n,i,r,a){let o=e*a-n*r,l=n*i-t*a,c=t*r-e*i,h=this.R,u=h[0]*o+h[1]*l+h[2]*c,f=h[3]*o+h[4]*l+h[5]*c,m=h[6]*o+h[7]*l+h[8]*c;return this.invMass+u*u/this.Ix+f*f/this.Iy+m*m/this.Iz}engineTorque(t){let e=t/this.spec.rpm,n=this.spec,i=n.ev?0:n.turbo?.33:.55,r=e<i?.55+.45*(e/i):e<.9?1:1-(e-.9)*(n.ev?1.5:2.5);r<0&&(r=0);let a=this.torqueMax*r,o=this.power*1e3/Math.max(100,t*Math.PI/30);return Math.min(a,o)}startSpin(t){this.spinT=this.spinDur,this.spinDir=t,this.spinA=0,this.spinDone=!1}stopSpin(){this.spinT=0,this.spinA=0}lockAt(t,e=0,n=!1){let i=this.spec,r=Math.max(0,t),a=i.steer/(1+r*.035);if(n)return a;let o=Math.max(1.5,this.wheels[0].mz-this.wheels[2].mz);return Math.min(a,Math.atan(o*i.mu*9.81/Math.max(1,r*r))+.13+e)}step(t,e,n){let i=this.spec,r=this.R,a=this.input,o=r[0],l=r[1],c=r[2],h=r[3],u=r[4],f=r[5],m=r[6],d=r[7],x=r[8],g=Math.hypot(this.vx,this.vy,this.vz),p=this.vx*m+this.vy*d+this.vz*x;this.speed=g,this.fwdSpeed=p,this.latSpeed=this.vx*o+this.vy*l+this.vz*c;let w=this.lockAt(p,Math.abs(Math.atan2(this.latSpeed,Math.max(1,Math.abs(p)))),a.handbrake>0),_=a.steer*w,v=2.6*t;this.steerNow+=Math.max(-v,Math.min(v,_-this.steerNow));let R=this.wheels[2].r,T=0,b=0;for(let st=0;st<4;st++){let k=this.wheels[st];(i.drive==="a"||i.drive==="f"===k.front)&&(T+=Math.abs(k.spin),b++)}let P=T/Math.max(1,b)*R/.34,M=0;if(this.gearbox)M=this.manualDrive(t,p,P);else{let st=i.gears[this.gear-1]*i.final,k=Math.abs(p)/.34,rt=Math.max(i.ev?0:900,Math.min(i.rpm*1.02,Math.max(k,P)*st*30/Math.PI));this.rpm+=(rt-this.rpm)*Math.min(1,t*25),this.shiftT>0?this.shiftT-=t:!this.reverse&&this.grounded&&(k*st*30/Math.PI>i.rpm*.95&&this.gear<i.gears.length?(this.gear++,this.shiftT=this.shiftTime):this.gear>1&&k*i.gears[this.gear-2]*i.final*30/Math.PI<i.rpm*(a.throttle>.5?.72:.6)&&(this.gear--,this.shiftT=.1)),a.brake>.5&&p<.8&&a.throttle<.1&&!this.hold?this.stopT+=t:this.stopT=0,this.stopT>.35&&(this.reverse=!0),a.throttle>.1&&this.reverse&&(this.reverse=!1),this.reverse&&(this.gear=1);let Tt=this.reverse?a.brake:a.throttle;this.shiftT<=0&&Tt>0&&(M=this.engineTorque(this.rpm)*Tt*i.gears[this.gear-1]*i.final*.88/.34*this.gearPull,this.reverse&&(M=-Math.min(M,4e3)),this.rpm>=i.rpm*1&&!this.reverse&&(M*=.2))}this.fuelCut&&!this.gearbox&&(M=0,this.rpm=0,this.reverse=!1),p>this.topSpeedCap&&(M=Math.min(M,0));let y=this.nitroOn>0?this.nitroForce*this.nitroOn:0,A=this.reverse&&!this.gearbox?0:a.brake;!this.reverse&&a.throttle<.05&&a.brake<.05&&Math.abs(p)<.8&&(A=.5),this.hold&&(A=1);let L=A*this.mass*9.81*1.15*this.brakeGrip,I=this.spinT>0;I&&(M=0);let z=0,Y=-this.mass*9.81,B=0,Z=0,H=0,tt=0,it=0,ht=this.steerNow,bt=Math.cos(ht),xt=Math.sin(ht),W=I?0:a.handbrake,et=this.mass/4;for(let st=0;st<4;st++){let k=this.wheels[st],rt=o*k.mx+h*k.my+m*k.mz,Tt=l*k.mx+u*k.my+d*k.mz,nt=c*k.mx+f*k.my+x*k.mz,dt=this.px+rt,yt=this.py+Tt,At=this.pz+nt;e.query(dt,At,k.hint,n),k.hint=n.i,k.surf=n.off;let mt=u>.25?u:.25,zt=(yt-n.y)/mt,Lt=k.rest+k.r-zt;if(k.prevComp=k.comp,Lt<=0||u<.2){k.contact=!1,k.comp=0,k.load=0,k.slipLat=0,k.slipLong=0,k.travel=k.rest,k.spin*=.995;continue}let Xt=Math.min(Lt,k.rest+.12);k.comp=Xt,k.travel=k.rest-Xt,k.contact=!0,it++;let D=(Xt-k.prevComp)/t,lt=this.k*Xt+this.c*D*(D<0?1.7:1);Lt>k.rest+.12&&(lt+=(Lt-k.rest-.12)*this.k*6+Math.max(0,D)*this.c*2),lt<0&&(lt=0),k.load=lt;let $=dt-h*zt,K=yt-u*zt,pt=At-f*zt;k.cx=$,k.cy=K,k.cz=pt;let ft=$-this.px,Ut=K-this.py,ae=pt-this.pz,_e=this.vx+(this.wy*ae-this.wz*Ut),$t=this.vy+(this.wz*ft-this.wx*ae),Fe=this.vz+(this.wx*Ut-this.wy*ft),ye=m,qe=d,Ye=x;k.front&&(ye=m*bt+o*xt,qe=d*bt+l*xt,Ye=x*bt+c*xt);let Be=n.nx,yn=n.ny,Hn=n.nz,Pi=ye*Be+qe*yn+Ye*Hn;ye-=Be*Pi,qe-=yn*Pi,Ye-=Hn*Pi;let Vn=Math.hypot(ye,qe,Ye)||1;ye/=Vn,qe/=Vn,Ye/=Vn;let fs=yn*Ye-Hn*qe,hi=Hn*ye-Be*Ye,ds=Be*qe-yn*ye,cn=_e*ye+$t*qe+Fe*Ye,ps=_e*fs+$t*hi+Fe*ds,_a=this.mu*(n.off===0?1:.85),Bs=lt,U=_a*(1.08-.08*Math.min(2,Bs/(this.mass*9.81/4)))*Bs,X=Math.atan2(ps,Math.abs(cn)+1.5),q=1;!k.front&&W>0&&(q=.42),I&&(q=.06);let N=-ug(X)*U*q,at=Math.abs(ps)*et/t;Math.abs(N)>at&&(N=N>0?at:-at);let ot=0,vt=i.drive==="a"||i.drive==="f"===k.front;vt&&(ot+=M/b),y&&!k.front&&(ot+=y/2);let _t=L*(k.front?.32:.18);if(!k.front&&W>0&&(_t+=W*this.mass*9.81*.35),_t>0){let Re=Math.abs(cn)*et/t,Yt=Math.min(_t,Re);ot-=cn>0?Yt:-Yt}if(ot-=.013*lt*Math.max(-1,Math.min(1,cn)),k.slipLong=0,Math.abs(ot)>U&&(k.slipLong=Math.min(1,(Math.abs(ot)-U)/U),this.assist.tc&&vt&&M>0&&(ot=Math.sign(ot)*U*.98)),this.assist.tc&&vt&&M>0&&W===0&&ot>0){let Re=Math.sqrt(Math.max(0,U*U-N*N))*.98;ot>Re&&(ot=Re)}let Dt=_t>0&&M<=0?U*this.brakeGrip:U,Ft=Math.hypot(ot,N);if(Ft>Dt){let Re=Dt/Ft;ot*=Re,N*=Re}k.slipLat=Math.abs(ps)>1.5?Math.min(1,(Math.abs(X)-.13)*4):0,k.slipLat<0&&(k.slipLat=0),!k.front&&W>0&&Math.abs(cn)>6&&(k.slipLat=Math.max(k.slipLat,.6));let Mt=cn/k.r;k.spin=Mt*(1+k.slipLong*.6)+(vt&&M>0&&k.slipLong>0?6*k.slipLong:0),!k.front&&W>0&&Math.abs(cn)>1&&(k.spin*=.2);let Wt=Be*lt+ye*ot+fs*N,te=yn*lt+qe*ot+hi*N,ee=Hn*lt+Ye*ot+ds*N;z+=Wt,Y+=te,B+=ee;let Ae=ft,qt=Ut+.25*zt,St=ae;Z+=qt*ee-St*te,H+=St*Wt-Ae*ee,tt+=Ae*te-qt*Wt}for(let st=0;st<4;st++){let k=this.wheels[st];k.spinAngle+=k.spin*t,k.spinAngle>1e4&&(k.spinAngle-=1e4)}let gt=.5*1.225*i.cda*g;z-=gt*this.vx,Y-=gt*this.vy,B-=gt*this.vz;let ct=.5*1.225*i.cl*p*Math.abs(p)*(it>0?1:.2);z-=h*ct,Y-=u*ct,B-=f*ct,this.grounded=it,it===0?this.airTime+=t:this.airTime=0;let Et=this.wx*h+this.wy*u+this.wz*f;if(it>=3&&this.assist.esc&&W===0&&!I&&p>5){let st=this.wheels[0].mz-this.wheels[2].mz,k=i.mu*9.81*1.1/p,rt=Math.max(-k,Math.min(k,p*Math.tan(ht)/st)),Tt=Et-rt;if(Tt*Et>0){let nt=-Tt*this.Iy*6*this.assist.esc;Z+=h*nt,H+=u*nt,tt+=f*nt}}if(it>=3&&W>0&&!I&&p>12){let st=a.steer*this.Iy*1.4;Z+=h*st,H+=u*st,tt+=f*st}if(it===0&&g>8){let st=Math.atan2(this.latSpeed,Math.max(1,Math.abs(p))),k=this.wx*h+this.wy*u+this.wz*f,rt=this.Iy*((.6+2.4*this.assist.air)*st-(.3+1.5*this.assist.air)*k);Z+=h*rt,H+=u*rt,tt+=f*rt}if(it===0&&this.assist.air&&!this.wrecked){let st=-f,k=h,rt=7*this.assist.air,Tt=3.2*this.assist.air;Z+=(st*rt-this.wx*Tt)*this.Ix,tt+=(k*rt-this.wz*Tt)*this.Iz}if(this.vx+=z*this.invMass*t,this.vy+=Y*this.invMass*t,this.vz+=B*this.invMass*t,this.applyAngular(Z,H,tt,t),I){let st=this.spinDur,k=st-this.spinT,rt=this.spinDir*Math.PI*Math.PI/st*Math.sin(Math.PI*Math.min(1,k/st)),Tt=this.wx*h+this.wy*u+this.wz*f;if(this.wx+=h*(rt-Tt),this.wy+=u*(rt-Tt),this.wz+=f*(rt-Tt),this.spinA+=Math.abs(rt)*t,this.spinT-=t,this.spinT<=0){this.spinT=0;let nt=this.wx*h+this.wy*u+this.wz*f;this.wx-=h*nt,this.wy-=u*nt,this.wz-=f*nt,this.spinA>Math.PI*1.8&&(this.spinDone=!0)}}let It=it?.995:.999;this.wx*=It,this.wy*=It,this.wz*=It,this.px+=this.vx*t,this.py+=this.vy*t,this.pz+=this.vz*t;let Pt=this.qx,Qt=this.qy,kt=this.qz,re=this.qw,F=this.wx,Te=this.wy,Vt=this.wz;this.qx+=.5*t*(F*re+Te*kt-Vt*Qt),this.qy+=.5*t*(Te*re+Vt*Pt-F*kt),this.qz+=.5*t*(Vt*re+F*Qt-Te*Pt),this.qw+=.5*t*(-F*Pt-Te*Qt-Vt*kt);let Gt=Math.hypot(this.qx,this.qy,this.qz,this.qw);this.qx/=Gt,this.qy/=Gt,this.qz/=Gt,this.qw/=Gt,this.updateR(),e.query(this.px,this.pz,this.hint,n),this.hint=n.i,this.trackQ_s=n.s,this.trackQ_d=n.d;let Ct=n.y+.25,ne=this.half.x,Rt=this.half.y*.9,C=this.half.z,S=1e9,V=0,j=0,Q=0;for(let st=0;st<8;st++){let k=st&1?ne:-ne,rt=st&2?Rt:-Rt*.4,Tt=(st&4?C:-C)-this.cgZ,nt=o*k+h*rt+m*Tt,dt=l*k+u*rt+d*Tt,yt=c*k+f*rt+x*Tt,At=this.py+dt;At<S&&(S=At,V=nt,j=dt,Q=yt)}let J=n.y-S;if(this.bodyHit=0,J>0){this.py+=J*.8;let st=n.nx,k=n.ny,rt=n.nz,Tt=this.vx+(this.wy*Q-this.wz*j),nt=this.vy+(this.wz*V-this.wx*Q),dt=this.vz+(this.wx*j-this.wy*V),yt=Tt*st+nt*k+dt*rt;if(yt<0){let At=this.invMassAt(V,j,Q,st,k,rt),mt=-1.25*yt/At;this.impulse(st*mt,k*mt,rt*mt,V,j,Q);let zt=Tt-st*yt,Lt=nt-k*yt,Xt=dt-rt*yt,D=Math.hypot(zt,Lt,Xt);if(D>.01){let lt=Math.min(mt*.6,D/At);this.impulse(-zt/D*lt,-Lt/D*lt,-Xt/D*lt,V,j,Q)}this.bodyHit=-yt}}Ct>this.py&&it===0&&J<=0}};var we={uSun:{value:new O(.45,.75,-.48).normalize()},uSunCol:{value:new Nt(1,.94,.84)},uSky:{value:new Nt(.55,.72,.95)},uGround:{value:new Nt(.42,.38,.32)},uFog:{value:new Nt(.74,.82,.92)},uFogNear:{value:220},uFogFar:{value:900},uTime:{value:0},uNight:{value:0}},li=`
varying float vFog;
`,Jr=`
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
`,Fn=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
`,Ll=`
vec3 light(vec3 n) {
  float d = max(dot(n, uSun), 0.0);
  vec3 amb = mix(uGround, uSky, n.y * 0.5 + 0.5) * 0.55;
  return amb + uSunCol * d * (1.0 - uNight * 0.85);
}
`;function ls(){return new ue({uniforms:we,vertexShader:Fn+li+`
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
  `+Jr+`
}`,fragmentShader:Fn+Ll+li+`
varying vec3 vCol; varying vec3 vN;
void main() {
  vec3 c = vCol * light(normalize(vN));
  gl_FragColor = vec4(mix(c, uFog, vFog), 1.0);
}`})}function Ah(){return new ue({uniforms:we,vertexShader:Fn+li+`
attribute vec4 col; attribute vec2 wuv;
varying vec3 vCol; varying vec3 vN; varying vec2 vUv;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vN = normalize(mat3(modelMatrix) * normal);
  vCol = col.rgb; vUv = wuv;
  `+Jr+`
}`,fragmentShader:Fn+Ll+li+`
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
}`})}function jr(s,t,e){return new ue({uniforms:Object.assign({uPaint:{value:new Nt(s||13639712)},uRoof:{value:new Nt(t>=0?t:s||13639712)},uRoofY:{value:e||99},uBrake:{value:0}},we),vertexShader:Fn+li+`
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
  `+Jr+`
}`,fragmentShader:Fn+Ll+li+`
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
}`})}function Rh(){return new ue({uniforms:we,depthWrite:!1,side:Le,vertexShader:"varying vec3 vDir; void main() { vDir = normalize(position); vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position = p.xyww; }",fragmentShader:Fn+`
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
}`})}function Ch(){return new ue({uniforms:we,vertexShader:Fn+li+`
varying vec3 vWp;
void main() { vec4 wp = modelMatrix * vec4(position, 1.0); vWp = wp.xyz; vec4 mv = viewMatrix * wp; gl_Position = projectionMatrix * mv; `+Jr+" }",fragmentShader:Fn+li+`
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
}`})}function Kr(){return new ue({uniforms:{uAlpha:{value:1}},transparent:!0,depthWrite:!1,blending:Si,vertexShader:"attribute vec4 col; varying vec4 vCol; void main() { vCol = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform float uAlpha; varying vec4 vCol; void main() { gl_FragColor = vec4(vCol.rgb * vCol.a * uAlpha, 1.0); }"})}function Ph(s){return new ue({uniforms:{uScale:{value:600},uNight:we.uNight},transparent:!0,depthWrite:!1,blending:s?Si:Qn,vertexShader:`attribute vec4 col; attribute float size; uniform float uScale; varying vec4 vCol;
void main() { vCol = col; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = size * uScale / max(1.0, -mv.z); }`,fragmentShader:"uniform float uNight; varying vec4 vCol; void main() { vec2 p = gl_PointCoord * 2.0 - 1.0; float r = dot(p, p); if (r > 1.0) discard; float a = vCol.a * (1.0 - r); float lum = max(vCol.r, max(vCol.g, vCol.b)); vec3 c = vCol.rgb * mix(1.0, 0.3, uNight * step(abs(vCol.r - vCol.b), 0.1)); gl_FragColor = vec4(c, a); }"})}function Qr(){return new ue({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:"attribute vec4 col; varying vec4 vCol; varying vec2 vUv; void main() { vCol = col; vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vCol; varying vec2 vUv; void main() { vec2 p = vUv * 2.0 - 1.0; float e = 1.0 - smoothstep(0.55, 1.0, max(abs(p.x), abs(p.y))); gl_FragColor = vec4(vCol.rgb, vCol.a * mix(1.0, e, step(0.5, vCol.b + 0.5) * 0.0 + 1.0)); }"})}var zl=["wfl","wfr","wbl","wbr"];function Fs(s){let t=Il(s),e=t.parts.find(o=>o.name==="body"),n=zl.map(o=>{let l=t.parts.find(c=>c.name===o);return l?{x:l.pivot[0],y:l.pivot[1],z:l.pivot[2],r:l.radius}:null}),i=e.max[0]-e.min[0],r=e.max[2]-e.min[2],a=e.max[1];for(let o=0;o<4;o++)n[o]||(n[o]={x:(o&1?-1:1)*i*.4,y:.35,z:(o<2?1:-1)*r*.32,r:.35});return{w:i,l:r,h:a,cg:Math.min(.62,a*.38),wheels:n,front:e.max[2],back:e.min[2]}}var Dl=null,Ul=null;function fg(){if(Dl)return Dl;let s=new ss(.16,1,8,1,!0);s.rotateX(-Math.PI/2),s.translate(0,0,-.5);let t=s.attributes.position.count,e=new Uint8Array(t*4);for(let n=0;n<t;n++){let r=-s.attributes.position.getZ(n);e[n*4]=120+135*(1-r),e[n*4+1]=160*(1-r)+60,e[n*4+2]=255,e[n*4+3]=255*(1-r*.9)}return s.setAttribute("col",new Ot(e,4,!0)),Dl=s,s}function dg(){if(Ul)return Ul;let s=new ii(1,1);s.rotateX(-Math.PI/2);let t=new Uint8Array(4*4);for(let e=0;e<4;e++)t[e*4+3]=140;return s.setAttribute("col",new Ot(t,4,!0)),Ul=s,s}var Nl=null,Fl=null,cs=class{constructor(t,e,n,i){this.scene=t,this.root=new pn,this.root.matrixAutoUpdate=!1;let r=Il(e);this.mat=jr(n,i,r.roofY),this.body=new Jt(Ci(e,"body"),this.mat),this.body.matrixAutoUpdate=!1,this.root.add(this.body);for(let o of r.parts)if(o.name!=="body"&&o.name[0]!=="w"){let l=new Jt(Ci(e,o.name),this.mat);l.matrixAutoUpdate=!1,this.root.add(l)}this.wheels=[];let a=Fs(e);this.dims=a;for(let o=0;o<4;o++){let l=r.parts.find(h=>h.name===zl[o]),c=new Jt(l?Ci(e,zl[o]):Ci("debris_tire","body"),this.mat);c.matrixAutoUpdate=!1,c.userData.base=new O(a.wheels[o].x,a.wheels[o].y,a.wheels[o].z),this.root.add(c),this.wheels.push(c)}Nl=Nl||Qr(),this.shadow=new Jt(dg(),Nl),this.shadow.matrixAutoUpdate=!1,this.shadow.renderOrder=1,t.add(this.shadow),Fl=Fl||Kr(),this.flames=[];for(let o of[.35,-.35]){let l=new Jt(fg(),Fl);l.position.set(o*a.w*.6,a.h*.28,a.back-.05),l.visible=!1,l.renderOrder=2,this.root.add(l),this.flames.push(l)}this.q=new gn,this.e=new rn,this.tmp=new se,this.v3=new O,this.s3=new O(1,1,1),t.add(this.root),this.lod=0}setPaint(t,e){this.mat.uniforms.uPaint.value.setHex(t),this.mat.uniforms.uRoof.value.setHex(e>=0?e:t)}sync(t,e,n,i){let r=t.R,a=this.root.matrix.elements,o=this.dims.cg;a[0]=r[0],a[1]=r[1],a[2]=r[2],a[3]=0,a[4]=r[3],a[5]=r[4],a[6]=r[5],a[7]=0,a[8]=r[6],a[9]=r[7],a[10]=r[8],a[11]=0;let l=t.cgZ||0;a[12]=t.px-r[3]*o-r[6]*l,a[13]=t.py-r[4]*o-r[7]*l,a[14]=t.pz-r[5]*o-r[8]*l,a[15]=1,this.root.matrixWorldNeedsUpdate=!0;let c=e<140;this.lod=e>900?2:c?0:1,this.root.visible=this.lod<2;for(let v=0;v<4;v++){let R=this.wheels[v],T=t.wheels[v];if(R.visible=this.lod===0||e<260,!R.visible)continue;let b=R.userData.base,P=T.front?t.steerNow:0;this.e.set(T.spinAngle,P,0,"YXZ"),this.q.setFromEuler(this.e),this.v3.set(b.x,b.y+(.1-(T.contact?T.travel-.25:.12))*.6,b.z),R.matrix.compose(this.v3,this.q,this.s3)}let h=n>0&&this.lod===0;for(let v of this.flames)if(v.visible=h,h){let R=.7+n*(.8+Math.random()*.5);v.scale.set(1,1,R*1.6),v.updateMatrix()}this.mat.uniforms.uBrake.value=i;let u=this.shadow.matrix.elements,f=Math.atan2(r[6],r[8]),m=Math.cos(f),d=Math.sin(f),x=t.groundY!==void 0?t.groundY:t.py-.6,g=Math.max(0,t.py-x-.5),p=Math.max(.3,1-g*.12),w=this.dims.w*1.15*p,_=this.dims.l*1.05*p;u[0]=m*w,u[1]=0,u[2]=-d*w,u[3]=0,u[4]=0,u[5]=1,u[6]=0,u[7]=0,u[8]=d*_,u[9]=0,u[10]=m*_,u[11]=0,u[12]=t.px,u[13]=x+.06,u[14]=t.pz,u[15]=1,this.shadow.matrixWorldNeedsUpdate=!0,this.shadow.visible=this.lod===0&&g<8}dispose(){this.scene.remove(this.root),this.scene.remove(this.shadow),this.mat.dispose()}};var Ee={nx:0,nz:0,depth:0,px:0,pz:0},vn=new Float32Array(8);function Ih(s,t){let e=s.R,n=s.half.x,i=s.half.z,r=e[0],a=e[2],o=Math.hypot(r,a)||1;r/=o,a/=o;let l=e[6],c=e[8],h=Math.hypot(l,c)||1;l/=h,c/=h;let u=0;for(let f=-1;f<=1;f+=2)for(let m=-1;m<=1;m+=2)t[u++]=s.px-e[6]*s.cgZ+r*n*f+l*i*m,t[u++]=s.pz-e[8]*s.cgZ+a*n*f+c*i*m;return t}function pg(s,t){let e=1e9;for(let c=0;c<2;c++){let h=c?t:s,u=h.R;for(let f=0;f<2;f++){let m=f?u[6]:u[0],d=f?u[8]:u[2],x=Math.hypot(m,d)||1;m/=x,d/=x;let g=Lh(s,m,d),p=Lh(t,m,d),w=(s.px-s.R[6]*s.cgZ)*m+(s.pz-s.R[8]*s.cgZ)*d,_=(t.px-t.R[6]*t.cgZ)*m+(t.pz-t.R[8]*t.cgZ)*d,v=g+p-Math.abs(_-w);if(v<=0)return!1;if(v<e){e=v;let R=_-w>=0?1:-1;Ee.nx=m*R,Ee.nz=d*R}}}Ee.depth=e,Ih(t,vn);let n=1e9,i=0,r=0;for(let c=0;c<4;c++){let h=vn[c*2]*Ee.nx+vn[c*2+1]*Ee.nz;h<n&&(n=h,i=vn[c*2],r=vn[c*2+1])}Ih(s,vn);let a=-1e9,o=0,l=0;for(let c=0;c<4;c++){let h=vn[c*2]*Ee.nx+vn[c*2+1]*Ee.nz;h>a&&(a=h,o=vn[c*2],l=vn[c*2+1])}return Ee.px=(i+o)/2,Ee.pz=(r+l)/2,!0}function Lh(s,t,e){let n=s.R,i=n[0],r=n[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=n[6],l=n[8],c=Math.hypot(o,l)||1;return o/=c,l/=c,Math.abs(i*t+r*e)*s.half.x+Math.abs(o*t+l*e)*s.half.z}var le={j:0,rel:0,nx:0,nz:0,px:0,py:0,pz:0};function Dh(s,t){if(Math.abs(s.py-t.py)>2.2)return 0;let e=s.px-t.px,n=s.pz-t.pz,i=s.half.z+t.half.z;if(e*e+n*n>i*i||!pg(s,t))return 0;let r=Ee.nx,a=Ee.nz,o=s.invMass/(s.invMass+t.invMass),l=1-o,c=Ee.depth+.01;s.px-=r*c*o,s.pz-=a*c*o,t.px+=r*c*l,t.pz+=a*c*l;let h=(s.py+t.py)/2+.1,u=Ee.px-s.px,f=h-s.py,m=Ee.pz-s.pz,d=Ee.px-t.px,x=h-t.py,g=Ee.pz-t.pz,p=s.vx+(s.wy*m-s.wz*f),w=s.vy+(s.wz*u-s.wx*m),_=s.vz+(s.wx*f-s.wy*u),v=t.vx+(t.wy*g-t.wz*x),R=t.vy+(t.wz*d-t.wx*g),T=t.vz+(t.wx*x-t.wy*d),b=v-p,P=R-w,M=T-_,y=b*r+M*a;if(y>=0)return 0;let A=.25,L=s.invMassAt(u,f,m,r,0,a)+t.invMassAt(d,x,g,r,0,a),I=-(1+A)*y/L;s.impulse(-r*I,0,-a*I,u,f,m),t.impulse(r*I,0,a*I,d,x,g);let z=b-r*y,Y=P,B=M-a*y,Z=Math.hypot(z,Y,B);if(Z>.05){let H=Math.min(I*.35,Z/L),tt=z/Z,it=Y/Z,ht=B/Z;s.impulse(tt*H,it*H,ht*H,u,f,m),t.impulse(-tt*H,-it*H,-ht*H,d,x,g)}return le.j=I,le.rel=-y,le.nx=r,le.nz=a,le.px=Ee.px,le.py=h,le.pz=Ee.pz,I}var ta=class{constructor(t,e){this.cam=new Ne(64,t,.3,e),this.mode=0,this.pos=new O,this.vel=new O,this.look=new O,this.dir=new O(0,0,1),this.shake=0,this.shakeOn=!0,this.init=!1,this.wreckA=0,this.back=!1,this.t=new O,this.l=new O}kick(t){this.shakeOn&&(this.shake=Math.min(1,this.shake+t))}update(t,e){let n=e.veh,i=n.R,r=this.cam,a=Math.max(0,n.fwdSpeed),o=i[6],l=i[8];n.speed>4&&e.wreck<=0&&(o=o*(1-.65)+n.vx/n.speed*.65,l=l*(1-.65)+n.vz/n.speed*.65);let c=Math.hypot(o,l)||1;o/=c,l/=c;let h=1-Math.exp(-t*7);this.dir.x+=(o-this.dir.x)*h,this.dir.z+=(l-this.dir.z)*h;let u=Math.hypot(this.dir.x,this.dir.z)||1,f=this.dir.x/u,m=this.dir.z/u,d,x,g;this.mode===1?(d=9+a*.03,x=3.4,g=6):this.mode===2?(d=-.6,x=1.05,g=30):(d=6.2+a*.022,x=2.25+a*.004,g=5);let p=this.back?-1:1;if(e.wreck>0?(this.wreckA+=t*.9,this.t.set(n.px+Math.sin(this.wreckA)*9,n.py+3.5,n.pz+Math.cos(this.wreckA)*9),this.l.set(n.px,n.py,n.pz)):(this.t.set(n.px-f*d*p,n.py+x,n.pz-m*d*p),this.l.set(n.px+f*g*p,n.py+(this.mode===2?.9:.8),n.pz+m*g*p)),!this.init||this.mode===2||this.back)this.pos.copy(this.t),this.init=!0;else{let _=1-Math.exp(-t*12);this.pos.lerp(this.t,_),this.pos.y<n.py+.8&&(this.pos.y=n.py+.8)}if(r.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-t*2.2);let _=this.shake*this.shake*.35;r.position.x+=(Math.random()-.5)*_,r.position.y+=(Math.random()-.5)*_}r.lookAt(this.l);let w=62+Math.min(16,a*.13)+(e.veh.nitroOn?8*Math.min(1.5,e.veh.nitroOn):0);r.fov+=(w-r.fov)*(1-Math.exp(-t*4)),r.updateProjectionMatrix()}};var ea=class{constructor(t,e,n){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.col=new Uint8Array(e*4),this.size=new Float32Array(e),this.life=new Float32Array(e),this.age=new Float32Array(e),this.grow=new Float32Array(e),this.base=new Uint8Array(e*4);let i=new me;this.aPos=new Ot(this.pos,3),this.aPos.setUsage(ri),this.aCol=new Ot(this.col,4,!0),this.aCol.setUsage(ri),this.aSize=new Ot(this.size,1),this.aSize.setUsage(ri),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("size",this.aSize),i.setDrawRange(0,0),this.mat=Ph(n),this.points=new kr(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,this.gravity=n?-9.8:.6,t.add(this.points),this.next=0}emit(t,e,n,i,r,a,o,l,c,h,u,f,m){let d=this.next;this.next=(this.next+1)%this.max,this.n<this.max&&this.n++,this.pos[d*3]=t,this.pos[d*3+1]=e,this.pos[d*3+2]=n,this.vel[d*3]=i,this.vel[d*3+1]=r,this.vel[d*3+2]=a,this.base[d*4]=o,this.base[d*4+1]=l,this.base[d*4+2]=c,this.base[d*4+3]=h,this.size[d]=u,this.life[d]=f,this.age[d]=0,this.grow[d]=m||0}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.age[n]>=this.life[n]){this.col[n*4+3]=0;continue}this.age[n]+=t;let i=1-this.age[n]/this.life[n];this.vel[n*3+1]+=this.gravity*t,this.vel[n*3]*=.985,this.vel[n*3+2]*=.985,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t,this.col[n*4]=this.base[n*4],this.col[n*4+1]=this.base[n*4+1],this.col[n*4+2]=this.base[n*4+2],this.col[n*4+3]=this.base[n*4+3]*i}this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}},Ol=class{constructor(t,e){this.max=e,this.next=0,this.pos=new Float32Array(e*4*3),this.col=new Uint8Array(e*4*4),this.uv=new Float32Array(e*4*2);let n=new Uint16Array(e*6);for(let r=0;r<e;r++){let a=r*4;n.set([a,a+1,a+2,a,a+2,a+3],r*6)}for(let r=0;r<e*4;r++)this.uv[r*2]=.5,this.uv[r*2+1]=.5;let i=new me;this.aPos=new Ot(this.pos,3),this.aPos.setUsage(ri),this.aCol=new Ot(this.col,4,!0),this.aCol.setUsage(ri),i.setAttribute("position",this.aPos),i.setAttribute("col",this.aCol),i.setAttribute("uv",new Ot(this.uv,2)),i.setIndex(new Ot(n,1)),this.mesh=new Jt(i,Qr()),this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh),this.last=new Float32Array(16*4).fill(NaN),this.dirty=!1}add(t,e,n,i,r,a,o){let l=this.last,c=t*4;if(o<=0||isNaN(l[c])){l[c]=e,l[c+1]=n,l[c+2]=i,l[c+3]=o>0?1:NaN,o<=0&&(l[c]=NaN);return}let h=e-l[c],u=i-l[c+2];if(h*h+u*u<.36)return;let f=this.next;this.next=(this.next+1)%this.max;let m=.13,d=this.pos,x=this.col,g=f*12;d[g]=l[c]+r*m,d[g+1]=l[c+1]+.03,d[g+2]=l[c+2]+a*m,d[g+3]=l[c]-r*m,d[g+4]=l[c+1]+.03,d[g+5]=l[c+2]-a*m,d[g+6]=e-r*m,d[g+7]=n+.03,d[g+8]=i-a*m,d[g+9]=e+r*m,d[g+10]=n+.03,d[g+11]=i+a*m;let p=Math.min(200,60+o*150);for(let w=0;w<4;w++)x[f*16+w*4]=12,x[f*16+w*4+1]=12,x[f*16+w*4+2]=12,x[f*16+w*4+3]=p;l[c]=e,l[c+1]=n,l[c+2]=i,this.dirty=!0}reset(t){this.last[t*4]=NaN}update(){this.dirty&&(this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.dirty=!1)}},Bl=class{constructor(t,e){this.n=e,this.pos=new Float32Array(e*6),this.col=new Uint8Array(e*8),this.seed=new Float32Array(e*3);for(let i=0;i<e;i++)this.seed[i*3]=Math.random()*6.28,this.seed[i*3+1]=2+Math.random()*3,this.seed[i*3+2]=Math.random()*40;let n=new me;this.aPos=new Ot(this.pos,3),this.aPos.setUsage(ri),this.aCol=new Ot(this.col,4,!0),this.aCol.setUsage(ri),n.setAttribute("position",this.aPos),n.setAttribute("col",this.aCol),this.lines=new Br(n,Kr()),this.lines.frustumCulled=!1,this.lines.renderOrder=4,t.add(this.lines)}update(t,e,n,i){let r=Math.max(0,Math.min(1,(n-45)/40))*.6+(i?.4:0);if(this.lines.visible=r>.02,!this.lines.visible)return;let a=e.matrixWorld.elements,o=a[0],l=a[1],c=a[2],h=a[4],u=a[5],f=a[6],m=-a[8],d=-a[9],x=-a[10],g=a[12],p=a[13],w=a[14];for(let _=0;_<this.n;_++){let v=this.seed[_*3+2]-t*n*1.4;v<2&&(v+=40),this.seed[_*3+2]=v;let R=this.seed[_*3],T=this.seed[_*3+1],b=Math.cos(R)*T,P=Math.sin(R)*T*.6,M=2+n*.06,y=g+o*b+h*P+m*v,A=p+l*b+u*P+d*v,L=w+c*b+f*P+x*v;this.pos[_*6]=y,this.pos[_*6+1]=A,this.pos[_*6+2]=L,this.pos[_*6+3]=y+m*M,this.pos[_*6+4]=A+d*M,this.pos[_*6+5]=L+x*M;let I=140*r,z=i?255:220;this.col[_*8]=i?120:220,this.col[_*8+1]=i?190:220,this.col[_*8+2]=z,this.col[_*8+3]=I,this.col[_*8+4]=0,this.col[_*8+5]=0,this.col[_*8+6]=0,this.col[_*8+7]=0}this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0}},kl=class{constructor(t,e){this.items=[];let n=["debris_bumper","debris_door","debris_tire","debris_spoiler","debris_plate"];for(let i=0;i<10;i++){let r=new Jt(Ci(n[i%n.length],"body"),e);r.userData.s0=n[i%n.length]==="debris_tire"?.65:.85,r.visible=!1,r.userData.v=new O,r.userData.w=new O,r.userData.t=0,t.add(r),this.items.push(r)}this.next=0}burst(t,e,n,i,r,a,o){for(let l=0;l<o;l++){let c=this.items[this.next];this.next=(this.next+1)%this.items.length,c.visible=!0,c.position.set(t,e+.6,n),c.userData.v.set(i*.5+(Math.random()-.5)*6,2.5+Math.random()*3.5,a*.5+(Math.random()-.5)*6),c.userData.w.set(Math.random()*10,Math.random()*10,Math.random()*10),c.userData.t=2.2,c.userData.floor=e-.4,c.scale.setScalar(c.userData.s0||1)}}update(t){for(let e of this.items){if(!e.visible)continue;let n=e.userData;if(n.t-=t,n.t<=0){e.visible=!1;continue}n.t<.5&&e.scale.setScalar(n.s0*n.t/.5),n.v.y-=9.8*t,e.position.x+=n.v.x*t,e.position.y+=n.v.y*t,e.position.z+=n.v.z*t,e.position.y<n.floor&&(e.position.y=n.floor,n.v.y*=-.3,n.v.x*=.7,n.v.z*=.7,n.w.multiplyScalar(.7)),e.rotation.x+=n.w.x*t,e.rotation.y+=n.w.y*t,e.rotation.z+=n.w.z*t}}},na=class{constructor(t,e,n){let i=e==="low";this.sparks=new ea(t,i?80:200,!0),this.smoke=new ea(t,i?60:160,!1),this.skids=new Ol(t,i?300:700),this.streaks=new Bl(t,i?24:48),this.debris=new kl(t,n),this.low=i}spark(t,e,n,i,r,a){for(let o=0;o<a;o++)this.sparks.emit(t,e,n,i*.5+(Math.random()-.5)*6,1+Math.random()*4,r*.5+(Math.random()-.5)*6,255,190+Math.random()*60,90,255,.12,.25+Math.random()*.3)}puff(t,e,n,i,r,a){this.smoke.emit(t,e+.2,n,i*.2+(Math.random()-.5),.6+Math.random()*.6,r*.2+(Math.random()-.5),225,225,228,110*a,.8,1.1,2.6)}update(t){this.sparks.update(t),this.smoke.update(t),this.skids.update(),this.debris.update(t)}};var Uh=`
uniform vec3 uSun; uniform vec3 uSunCol; uniform vec3 uSky; uniform vec3 uGround; uniform vec3 uFog;
uniform float uFogNear; uniform float uFogFar; uniform float uTime; uniform float uNight;
varying float vFog;
`;function Nh(){return new ue({uniforms:we,vertexShader:Uh+`
attribute vec4 ds;   // x = d (m, left +), y = s (m along the street), z = half width, w = flags (1 junction, 2 one-way, 4 zebra side)
varying vec4 vDs; varying vec3 vWp;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vec4 mv = viewMatrix * wp;
  gl_Position = projectionMatrix * mv;
  vDs = ds; vWp = wp.xyz;
  vFog = clamp((length(mv.xyz) - uFogNear) / (uFogFar - uFogNear), 0.0, 1.0);
}`,fragmentShader:Uh+`
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
}`,extensions:{derivatives:!0}})}var De=200,Fh=2.2,hs=class{constructor(){this.p=[],this.n=[],this.c=[],this.i=[],this.extra=null}get count(){return this.p.length/3}vert(t,e,n,i,r,a,o,l,c,h){return this.p.push(t,e,n),this.n.push(i*127|0,r*127|0,a*127|0,0),this.c.push(o,l,c,h||0),this.count-1}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}model(t,e,n,i,r,a,o,l){let c=Pl(t,e),h=Math.cos(a),u=Math.sin(a),f=o||1,m=this.count;for(let d=0;d<c.part.n;d++){let x=c.pos[d*3]*f,g=c.pos[d*3+1]*f,p=c.pos[d*3+2]*f,w=c.nrm[d*4]/127,_=c.nrm[d*4+1]/127,v=c.nrm[d*4+2]/127,R=c.col[d*4],T=c.col[d*4+1],b=c.col[d*4+2];l&&(R=R*l[0]|0,T=T*l[1]|0,b=b*l[2]|0),this.p.push(n+x*h+p*u,i+g,r-x*u+p*h),this.n.push(Math.round((w*h+v*u)*127),Math.round(_*127),Math.round((-w*u+v*h)*127),0),this.c.push(Math.min(255,R),Math.min(255,T),Math.min(255,b),c.col[d*4+3]===64?64:0)}for(let d=0;d<c.idx.length;d++)this.i.push(m+c.idx[d])}box(t,e,n,i,r,a,o,l,c,h,u,f){let m=-l,d=o,x=[];for(let p=0;p<8;p++){let w=p&1?i:-i,_=p&2?r:0,v=p&4?a:-a;x.push(t+o*w+m*v,e+_,n+l*w+d*v)}let g=[[0,4,6,2,-1,0,0],[1,3,7,5,1,0,0],[0,1,5,4,0,-1,0],[2,6,7,3,0,1,0],[0,2,3,1,0,0,-1],[4,5,7,6,0,0,1]];for(let p of g){let w=p[4]*o+p[6]*m,_=p[5],v=p[4]*l+p[6]*d,R=p.slice(0,4).map(B=>this.vert(x[B*3],x[B*3+1],x[B*3+2],w,_,v,c,h,u,f?64:0)),T=p[0]*3,b=p[1]*3,P=p[2]*3,M=x[b]-x[T],y=x[b+1]-x[T+1],A=x[b+2]-x[T+2],L=x[P]-x[T],I=x[P+1]-x[T+1],z=x[P+2]-x[T+2];(y*z-A*I)*w+(A*L-M*z)*_+(M*I-y*L)*v>=0?this.quad(R[0],R[1],R[2],R[3]):this.quad(R[0],R[3],R[2],R[1])}}build(t){let e=new me;if(e.setAttribute("position",new Ot(new Float32Array(this.p),3)),t&&e.setAttribute("normal",new Ot(new Int8Array(this.n),4,!0)),e.setAttribute("col",new Ot(new Uint8Array(this.c),4,!0)),e.setIndex(new Ot(this.count>65535?new Uint32Array(this.i):new Uint16Array(this.i),1)),this.extra)for(let n in this.extra){let i=this.extra[n];e.setAttribute(n,new Ot(new Float32Array(i.a),i.n))}return e.computeBoundingSphere(),e}};function mg(s){let t=s>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967296)}var zh=[[240,238,230],[244,242,236],[236,226,204],[226,212,186],[222,200,172],[232,230,224],[214,222,228],[236,214,204],[246,246,244]],ia=class{constructor(t,e,n){this.scene=t,this.net=e,this.reach=n.tier==="low"?520:n.tier==="mid"?680:860,this.mats={world:ls(),road:Nh(),bld:Ah()},this.chunks=new Map;let i=(f,m)=>Math.floor(f/De)*1e3+Math.floor(m/De)+500500;this.key=i;let r=f=>{let m=this.chunks.get(f);return m||this.chunks.set(f,m={k:f,segs:[],blds:[],heads:[],st:[],jn:[],built:null}),m};for(let f=0;f<e.n-1;f++)e.sE[f+1]===e.sE[f]&&r(i((e.px[f]+e.px[f+1])/2,(e.pz[f]+e.pz[f+1])/2)).segs.push(f);for(let f=0;f<e.nj;f++)e.jEdges[f].length>=3&&r(i(e.jx[f],e.jz[f])).jn.push(f);let a=e.bld;for(let f=0;f<a.length;){let m=a[f];r(i(a[f+3],a[f+4])).blds.push(f),f+=3+m*2}for(let f of e.stations){let m=e.eOff[f.e]+f.k;r(i(e.px[m],e.pz[m])).st.push(f)}this.getChunk=r,this.heads=[];let o={};for(let f=0;f<e.lights.length;f++){let m=e.lights[f],d=m.j,x=e.jEdges[d];for(let g=0;g<x.length;g++){let p=x[g],w=e.eB[p]===d;if(e.eOne[p]&&!w)continue;let _=w?-1:1,v=e.eHw[p],R=!1;for(let M=1.5;M<=13.5&&!R;M+=2){let y=w?e.eLen[p]-e.jr[d]-M:e.jr[d]+M;if(y<0||y>e.eLen[p])break;for(let A=.7;A<=2.9&&!R;A+=.55)e.at(p,y,_*(v+A),o),Math.hypot(o.x-e.jx[d],o.z-e.jz[d])>e.jr[d]+.4&&this.clear(o.x,o.z,.45,!0)&&(R=!0)}if(!R)continue;let T=w?o.fx:-o.fx,b=w?o.fz:-o.fz,P={L:f,ph:m.ph[g],x:o.x,y:o.y+.15,z:o.z,fx:T,fz:b};this.heads.push(P),r(i(o.x,o.z)).heads.push(P)}}let l=new Ei(.24,.24,.08);this.lamps=new Fr(l,new Un({color:16777215}),Math.max(1,this.heads.length*3));let c=new se,h=new Nt(2236962);for(let f=0;f<this.heads.length;f++){let m=this.heads[f];for(let d=0;d<3;d++)c.makeRotationY(Math.atan2(m.fx,m.fz)),c.setPosition(m.x-m.fx*.2,m.y+3.75-d*.3,m.z-m.fz*.2),this.lamps.setMatrixAt(f*3+d,c),this.lamps.setColorAt(f*3+d,h)}this.lamps.frustumCulled=!1,t.add(this.lamps),this.lampState=new Int8Array(this.heads.length).fill(-1);let u=new ii(4e4,4e4,1,1);u.rotateX(-Math.PI/2),this.sea=new Jt(u,Ch()),this.sea.position.y=0,this.sea.frustumCulled=!1,this.sea.renderOrder=-1,t.add(this.sea),this.sky=new Jt(new Vr(5e3,16,8),Rh()),this.sky.frustumCulled=!1,this.sky.renderOrder=10,t.add(this.sky),this.live=[],this.buildMs=0,this.built=0}setLamps(t){let e=[new Nt(16722458),new Nt(16756736),new Nt(2293606)],n=new Nt(1907997),i=!1;for(let r=0;r<this.heads.length;r++){let a=this.heads[r],o=t(a.L,a.ph);o!==this.lampState[r]&&(this.lampState[r]=o,i=!0,this.lamps.setColorAt(r*3,o===2?e[0]:n),this.lamps.setColorAt(r*3+1,o===1?e[1]:n),this.lamps.setColorAt(r*3+2,o===0?e[2]:n))}i&&(this.lamps.instanceColor.needsUpdate=!0)}stream(t,e,n,i){let r=performance.now(),a=this.reach,o=Math.floor(t/De),l=Math.floor(e/De),c=Math.ceil(a/De)+1,h=[];for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++){let m=(o+u+.5)*De,d=(l+f+.5)*De,x=Math.hypot(m-t,d-e)-De*.71;if(x>a)continue;let g=this.chunks.get((o+u)*1e3+(l+f)+500500)||this.emptyChunk(o+u,l+f);g.built||h.push([x,g])}h.sort((u,f)=>u[0]-f[0]);for(let[,u]of h){if(!i&&performance.now()-r>n)break;this.buildChunk(u)}for(let u=this.live.length-1;u>=0;u--){let f=this.live[u];Math.hypot(f.cx-t,f.cz-e)-De*.71>a+260&&(this.dropChunk(f),this.live.splice(u,1))}this.buildMs=performance.now()-r}addEnforce(t){for(let e of t.cams){let n=this.getChunk(this.key(e.x,e.z));(n.cams||(n.cams=[])).push(e)}for(let e of t.police){let n=this.getChunk(this.key(e.x,e.z));(n.cops||(n.cops=[])).push(e)}}emptyChunk(t,e){let n=t*1e3+e+500500,i={k:n,segs:[],blds:[],heads:[],st:[],jn:[],built:null};return this.chunks.set(n,i),i}buildChunk(t){let e=this.net,n=t.k-500500,i=Math.round(n/1e3),r=n-i*1e3,a=i*De,o=r*De,l=new hs,c=new hs,h=new hs,u=new hs;l.extra={ds:{a:[],n:4}};let f=l.extra.ds.a,m=mg(t.k*7919+13),d=t.segs,x=0;for(let b=1;b<=d.length;b++)b<d.length&&d[b]===d[b-1]+1&&e.sE[d[b]]===e.sE[d[x]]||(this.street(l,f,h,c,d[x],d[b-1]+1,m),x=b);for(let b of t.jn){let P=e.jr[b]+.4,M=e.jy[b]+.012,y=18,A=l.count;l.vert(e.jx[b],M,e.jz[b],0,1,0,0,0,0),f.push(0,0,99,1);for(let L=0;L<=y;L++){let I=L/y*Math.PI*2;l.vert(e.jx[b]+Math.cos(I)*P,M,e.jz[b]+Math.sin(I)*P,0,1,0,0,0,0),f.push(0,0,99,1)}for(let L=0;L<y;L++)l.i.push(A,A+2+L,A+1+L)}let g=e.g,p=Math.max(0,Math.floor((a-g.x0)/g.c)),w=Math.min(g.nx-1,Math.ceil((a+De-g.x0)/g.c)),_=Math.max(0,Math.floor((o-g.z0)/g.c)),v=Math.min(g.nz-1,Math.ceil((o+De-g.z0)/g.c));if(w>p&&v>_){let b=w-p+1,P=c.count,M=g.h,y=g.nx,A=(L,I)=>M[Math.max(0,Math.min(g.nz-1,I))*y+Math.max(0,Math.min(y-1,L))]/10;for(let L=_;L<=v;L++)for(let I=p;I<=w;I++){let z=A(I,L),Y=(A(I+1,L)-A(I-1,L))/(2*g.c),B=(A(I,L+1)-A(I,L-1))/(2*g.c),Z=Math.hypot(Y,1,B),H=1/Z,tt=(Math.sin(I*.9)+Math.sin(L*1.3))*.5,it,ht,bt;z<.5?(it=196,ht=182,bt=146):z<3?(it=222+tt*8,ht=206+tt*8,bt=162):H<.82?(it=132+tt*10,ht=118+tt*8,bt=96):(it=116+tt*16,ht=132+tt*14,bt=76+tt*6),c.vert(g.x0+I*g.c,z,g.z0+L*g.c,-Y/Z,H,-B/Z,it,ht,bt)}for(let L=0;L<v-_;L++)for(let I=0;I<b-1;I++){let z=P+L*b+I;A(p+I,_+L)<-2.4&&A(p+I+1,_+L+1)<-2.4&&A(p+I+1,_+L)<-2.4||c.quad(z,z+b,z+b+1,z+1)}}for(let b of t.blds)this.building(u,b);for(let b of t.heads){let P=b.fz,M=-b.fx;c.box(b.x,b.y,b.z,.07,3.4,.07,P,M,70,72,76),c.box(b.x-b.fx*.05,b.y+3.3,b.z-b.fz*.05,.2,.95,.12,P,M,30,30,32)}for(let b of t.cams||[]){let P=Math.sin(b.yaw),M=Math.cos(b.yaw),y=M,A=-P;c.box(b.x,b.y,b.z,.06,2.7,.06,y,A,120,124,128),c.box(b.x,b.y+2.55,b.z,.28,.6,.3,y,A,200,204,208),c.box(b.x,b.y+2.62,b.z,.29,.12,.31,y,A,240,196,24),c.box(b.x+P*.31,b.y+2.82,b.z+M*.31,.1,.18,.02,y,A,20,22,26)}for(let b of t.cops||[]){let P=Math.sin(b.yaw),M=Math.cos(b.yaw),y=M,A=-P,L=[22,34,70],I=[190,140,105];c.box(b.x+y*.1,b.y,b.z+A*.1,.08,.9,.1,y,A,...L),c.box(b.x-y*.1,b.y,b.z-A*.1,.08,.9,.1,y,A,...L),c.box(b.x,b.y+.9,b.z,.23,.62,.14,y,A,...L),c.box(b.x+y*.08,b.y+1.3,b.z+A*.08+0,.05,.12,.15,y,A,245,245,245),c.box(b.x,b.y+1.52,b.z,.11,.24,.11,y,A,...I),c.box(b.x,b.y+1.74,b.z,.14,.08,.15,y,A,245,245,245),c.box(b.x+y*.31,b.y+.95,b.z+A*.31,.06,.55,.06,y,A,...L),c.box(b.x-y*.31,b.y+.95,b.z-A*.31,.06,.55,.06,y,A,...L),c.box(b.x+y*.31,b.y+.85,b.z+A*.31,.06,.1,.06,y,A,250,250,250),c.box(b.x-y*.31,b.y+.85,b.z-A*.31,.06,.1,.06,y,A,250,250,250);let z=b.x-P*.4+y*5.5,Y=b.z-M*.4+A*5.5,B=Math.atan2(y,A);for(let Z of["body","wfl","wfr","wbl","wbr"])h.model("car_police",Z,z,b.y,Y,B,1)}for(let b of t.st)this.station(c,h,b);let R={k:t.k,meshes:[],cx:a+De/2,cz:o+De/2},T=(b,P,M)=>{if(!b.count)return;let y=new Jt(b.build(M!=="road"),P);y.matrixAutoUpdate=!1,y.updateMatrix(),y.userData.kind=M,this.scene.add(y),R.meshes.push(y)};T(l,this.mats.road,"road"),T(c,this.mats.world,"core"),T(h,this.mats.world,"detail"),T(u,this.mats.bld,"bld"),t.built=R,this.live.push(t),t.cx=R.cx,t.cz=R.cz,this.built++}dropChunk(t){for(let e of t.built.meshes)this.scene.remove(e),e.geometry.dispose();t.built=null}street(t,e,n,i,r,a,o){let l=this.net,c=l.sE[r],h=l.eHw[c],u=l.eCls[c],f=l.eOne[c],m=[0,0,0,h,0,-h,0,0,0],d=9,x=t.count,g=l.eLen[c],p=l.eA[c],w=l.eB[c];for(let _=r;_<=a;_++){let v=l.px[_],R=l.py[_],T=l.pz[_],b=l.tz[_],P=-l.tx[_],M=l.sS[_],y=l.sJ[_]>=0,A=l.jEdges[p].length>=3&&M>l.jr[p]+2&&M<l.jr[p]+6,L=l.jEdges[w].length>=3&&g-M>l.jr[w]+2&&g-M<l.jr[w]+6,I=(y?1:0)+(f?2:0)+(A||L?4:0),z=l.pl[_],Y=l.pr[_],B=z>=de-.05,Z=Y>=de-.05;m[0]=h+z+(B?Fh:0),m[1]=h+z,m[2]=h+Math.min(.35,z),m[6]=-h-Math.min(.35,Y),m[7]=-h-Y,m[8]=-h-Y-(Z?Fh:0);let H=!y&&z>.6?.15:0,tt=!y&&Y>.6?.15:0;for(let xt=0;xt<d;xt++){let W=m[xt],et=xt===0?B?-.55:H:xt===8?Z?-.55:tt:xt===1||xt===2?H:xt===6||xt===7?tt:0;t.vert(v+b*W,R+et,T+P*W,0,1,0,0,0,0),e.push(W,M,h,I)}if(_>r){let xt=x+(_-r-1)*d,W=x+(_-r)*d;for(let et=0;et<d-1;et++)t.quad(xt+et,xt+et+1,W+et+1,W+et)}if(y||_===a)continue;let it=Math.atan2(l.tx[_],l.tz[_]),ht=l.pl[_],bt=l.pr[_];if(u<=3&&_%10===0&&ht>1.4){let xt=h+.9;this.clear(v+b*xt,T+P*xt,.6)&&this.lamp(n,v+b*xt,R+.15,T+P*xt,-b,-P)}if(u<=3&&_%10===5&&bt>1.4){let xt=-(h+.9);this.clear(v+b*xt,T+P*xt,.6)&&this.lamp(n,v+b*xt,R+.15,T+P*xt,b,P)}if(_%6===3&&o()<(u>=4?.45:.3)){let xt=o()<.5?1:-1,W=xt*(h+de-.7);if((xt>0?ht:bt)<de-.05||!this.clear(v+b*W,T+P*W,1.6))continue;let gt=R<9&&u<=2?"palm_tall":o()<.5?"tree":"tree_oak",ct=gt[0]==="p"?.5+o()*.1:gt==="tree"?.32+o()*.08:.4+o()*.1;n.model(gt,"body",v+b*W,R+.15,T+P*W,o()*6.28,ct)}}}lamp(t,e,n,i,r,a){this.poleLog&&this.poleLog.push(e,i);let o=2,l=Math.atan2(r,a),c=Math.cos(l),h=Math.sin(l),u=-1.575*o,f=-2.925*o;t.model("light_modern","body",e-(u*c+f*h),n,i-(-u*h+f*c),l,o)}clear(t,e,n,i){let r=this.net.query(t,e,-1,this.cq||(this.cq={}));if(r.edge<0)return!0;if(Math.abs(r.d)-r.hl<n)return!1;if(r.junc<0)return!0;let a=this.net,o=r.junc;return!!i&&Math.hypot(t-a.jx[o],e-a.jz[o])>a.jr[o]+n}station(t,e,n){let i=this.net,r=n.e,a=i.eOff[r]+n.k,o=i.px[a],l=i.py[a]+.15,c=i.pz[a],h=i.tx[a],u=i.tz[a],f=u,m=-h,d=i.eHw[r],x=-(d+de*.35),g=o+f*x,p=c+m*x;t.box(g,l+4.6,p,8,.6,(de+3.5)/2,h,u,236,236,232),t.box(g,l+4.55,p,8.05,.12,(de+3.5)/2+.05,h,u,20,150,90);for(let v of[-6,6]){let R=o+f*-(d+de-.4)+h*v,T=c+m*-(d+de-.4)+u*v;t.box(R,l,T,.2,4.6,.2,h,u,210,210,206);let b=o+f*-(d+1.6)+h*v*.6,P=c+m*-(d+1.6)+u*v*.6;t.box(b,l,P,.5,1.7,.3,h,u,30,160,95),t.box(b,l+1.2,P,.52,.35,.32,h,u,250,250,250,!0)}let w=o+f*-(d+de+1.5)+h*11,_=c+m*-(d+de+1.5)+u*11;t.box(w,l,_,.18,7,.18,h,u,180,180,180),t.box(w,l+5.2,_,.15,2.2,1.3,h,u,20,150,90),t.box(w,l+6,_,.17,.8,1,h,u,255,210,40,!0)}building(t,e){let n=this.net.bld,i=n[e],r=n[e+1],a=n[e+2],o=[],l=0,c=0;for(let _=0;_<i;_++){let v=n[e+3+_*2],R=n[e+4+_*2];o.push(new jt(v,R)),l+=v,c+=R}l/=i,c/=i;let h=zh[Math.abs(Math.round(o[0].x*3+o[0].y*7))%zh.length],u=r>24?[200,206,212]:h,f=a-3,m=a+r;t.extra||(t.extra={wuv:{a:[],n:2}});let d=t.extra.wuv.a,x=0;for(let _=0;_<i;_++){let v=o[_],R=o[(_+1)%i],T=R.x-v.x,b=R.y-v.y,P=Math.hypot(T,b);if(P<.05)continue;let M=-b/P,y=T/P,A=M*((v.x+R.x)/2-l)+y*((v.y+R.y)/2-c)>0;A||(M=-M,y=-y);let L=t.vert(v.x,f,v.y,M,0,y,u[0],u[1],u[2]),I=t.vert(R.x,f,R.y,M,0,y,u[0],u[1],u[2]),z=t.vert(R.x,m,R.y,M,0,y,u[0],u[1],u[2]),Y=t.vert(v.x,m,v.y,M,0,y,u[0],u[1],u[2]);d.push(x,-3,x+P,-3,x+P,r,x,r),A?t.quad(L,I,z,Y):t.quad(L,Y,z,I),x+=P}let g=Hr.triangulateShape(o,[]),p=t.count,w=[u[0]*.84|0,u[1]*.82|0,u[2]*.78|0];for(let _ of o)t.vert(_.x,m,_.y,0,1,0,w[0],w[1],w[2]),d.push(0,0);for(let _ of g){let v=o[_[0]],R=o[_[1]],T=o[_[2]];(R.y-v.y)*(T.x-v.x)-(R.x-v.x)*(T.y-v.y)>0?t.i.push(p+_[0],p+_[1],p+_[2]):t.i.push(p+_[0],p+_[2],p+_[1])}}cull(t,e,n,i){for(let r=0;r<this.live.length;r++){let a=this.live[r],o=Math.hypot(a.cx-t,a.cz-e)-De*.71,l=a.built.meshes;for(let c=0;c<l.length;c++)l[c].visible=o<(l[c].userData.kind==="detail"?i:l[c].userData.kind==="bld"?n*.85:n)}}dispose(){for(let t of this.live)this.dropChunk(t);this.live=[],this.scene.remove(this.lamps),this.lamps.geometry.dispose(),this.lamps.material.dispose(),this.scene.remove(this.sea),this.sea.geometry.dispose(),this.sea.material.dispose(),this.scene.remove(this.sky),this.sky.geometry.dispose(),this.sky.material.dispose();for(let t in this.mats)this.mats[t].dispose()}};var gg=36;function zs(s,t,e,n){let i=(n+s.lights[t].off)%gg;return e===0?i<14?0:i<17?1:2:i<18?2:i<32?0:i<35?1:2}var Oh=[["tr_sedan",15197144],["tr_suv",4212303],["tr_van",15921906],["tr_sedan",9182493],["tr_delivery",16053492],["tr_truck",2906784],["tr_taxi",14205498],["tr_sedan",13224393],["tr_suv",1780298],["tr_sedan",2830134],["tr_taxi",14205498],["tr_sedan",10134445]],zn=99,ci=()=>(zn^=zn<<13,zn>>>=0,zn^=zn>>17,zn^=zn<<5,zn>>>=0,zn/4294967296),Hl=class{constructor(t,e){let[n,i]=Oh[e%Oh.length];this.spec=Object.assign({},n==="tr_truck"||n==="tr_delivery"?je.t_heavy:je.t_small,{model:n}),this.veh=new os(this.spec,Fs(n)),this.veh.assist.air=0,this.view=new cs(t,n,i),this.traffic=!0,this.player=-1,this.wreck=0,this.active=!1,this.id=e,this.e=0,this.dir=1,this.s=0,this.ne=-1,this.nd=1,this.phase=-1,this.mood=.85+ci()*.15,this.stuck=0,this.claim=-1,this.hitT=0,this.at={},this.at2={}}},sa=class{constructor(t,e,n){this.net=e,this.cars=[];for(let i=0;i<n;i++)this.cars.push(new Hl(t,i));this.t=0,this.busy=new Map,this.reach=340}lane(t,e){let n=this.net,i=n.eHw[t];return n.eOne[t]?i>3.9?-(i-1.9):0:-e*Math.min(i*.5,2.2)}pickNext(t){let e=this.net,n=t.dir>0?e.eB[t.e]:e.eA[t.e],i=[],r=0;for(let o of e.jEdges[n]){if(o===t.e&&e.jEdges[n].length>1||!e.canLeave(o,n)||e.eN[o]<4)continue;let l=e.eCls[o]<=2?3:e.eCls[o]<=3?2:1;i.push(o,l),r+=l}if(!i.length){t.ne=t.e,t.nd=-t.dir;return}let a=ci()*r;for(let o=0;o<i.length;o+=2)if(a-=i[o+1],a<=0||o===i.length-2){t.ne=i[o],t.nd=e.eA[i[o]]===n?1:-1;break}}place(t,e,n,i,r){let a=this.net,o=a.at(e,n,this.lane(e,i),t.at),l=o.fx*i,c=o.fz*i,h=t.veh;h.setPose(o.x,o.y+h.cgY+.42,o.z,Math.atan2(l,c)),h.hint=o.i;for(let u of h.wheels)u.hint=o.i;h.vx=l*r,h.vz=c*r,h.gear=1,h.reverse=!1,t.e=e,t.dir=i,t.s=n,t.active=!0,t.wreck=0,t.stuck=0,t.phase=-1,t.claim=-1,t.mood=.82+ci()*.18,this.pickNext(t)}spawn(t,e,n,i,r,a,o){let l=this.net;for(let c=0;c<24;c++){let h=ci()*Math.PI*2,u=150+ci()*(this.reach-170),f=e+Math.sin(h)*u,m=n+Math.cos(h)*u;if(c<16&&Math.sin(h)*i+Math.cos(h)*r>.55&&u<260||(l.query(f,m,-1,o),o.edge<0||o.junc>=0||l.eCls[o.edge]>=5&&ci()<.6))continue;let d=o.edge,x=l.eLen[d];if(x<30||o.s<12||o.s>x-12)continue;let g=l.eOne[d]||ci()<.5?1:-1,p=l.at(d,o.s,this.lane(d,g),t.at2),w=!0;for(let _ of a){if(_===t||_.traffic&&!_.active)continue;let v=_.veh.px-p.x,R=_.veh.pz-p.z;if(v*v+R*R<18*18){w=!1;break}}if(w)return this.place(t,d,o.s,g,6+ci()*4),!0}return!1}update(t,e,n,i){this.t+=t;let r=this.net,a=n.veh,o=Math.sin(a.yaw()),l=Math.cos(a.yaw());for(let[c,h]of this.busy)this.t-h.t>.3&&this.busy.delete(c);for(let c of this.cars){let h=c.veh;if(!c.active||c.wreck>0){if(c.wreck>0&&(c.wreck-=t,h.input.throttle=0,h.input.brake=1,h.input.steer=0,c.wreck>0))continue;this.spawn(c,a.px,a.pz,o,l,e,i);continue}let u=h.px-a.px,f=h.pz-a.pz;if(u*u+f*f>(this.reach+40)**2||c.stuck>7||h.R[4]<.3){c.active=!1,h.setPose(0,-500,0,0);continue}this.drive(c,t,e)}}drive(t,e,n){let i=this.net,r=t.veh,a=i.eLen[t.e];if(t.s=i.project(t.e,t.s,r.px,r.pz),t.dir>0&&t.s>a-.6||t.dir<0&&t.s<.6){let Z=t.dir>0?i.eB[t.e]:i.eA[t.e];t.claim,t.e=t.ne,t.dir=t.nd,a=i.eLen[t.e],t.s=t.dir>0?.6:a-.6,t.phase=-1,this.pickNext(t)}let o=t.dir>0?a-t.s:t.s,l=Math.max(0,r.fwdSpeed),c=5.5+l*.55,h=t.at;if(c<o)i.at(t.e,t.s+t.dir*c,this.lane(t.e,t.dir),h);else{let Z=Math.min(i.eLen[t.ne],c-o);i.at(t.ne,t.nd>0?Z:i.eLen[t.ne]-Z,this.lane(t.ne,t.nd),h)}let u=r.R,f=h.x-r.px,m=h.z-r.pz,d=f*u[0]+m*u[2],x=f*u[6]+m*u[8],g=2.6,p=Math.max(4,f*f+m*m),w=Math.atan2(2*g*d,p),_=r.lockAt(l);r.input.steer=Math.max(-1,Math.min(1,w/Math.max(.05,_))),x<0&&(r.input.steer=d>=0?1:-1);let v=i.eLim[t.e]/3.6*t.mood,R=i.at(t.e,t.s,0,t.at2),T=R.fx*t.dir,b=R.fz*t.dir,P=h.fx*(c<o?t.dir:t.nd),M=h.fz*(c<o?t.dir:t.nd),y=Math.acos(Math.max(-1,Math.min(1,T*P+b*M)));y>.05&&(v=Math.min(v,Math.sqrt(2.6*c/y)));let A=t.dir>0?i.eB[t.e]:i.eA[t.e],L=i.jr[A],I=o-L;if(I<60){let Z=I-2.5,H=!1,tt=i.jLight[A];if(tt>=0){if(t.phase<0){let et=i.slot(t.e,A);t.phase=et>=0?i.lights[tt].ph[et]:0}let W=zs(i,tt,t.phase,this.t);(W===2||W===1&&Z>l*l/7)&&(H=Z>-1)}else if(i.jEdges[A].length>=3&&I<9){let W=this.busy.get(A);!W||W.car===t?this.busy.set(A,{car:t,t:this.t}):Z>-.5&&(H=!0)}H&&(v=Math.min(v,Math.sqrt(2*3.2*Math.max(0,Z-.8))));let it=i.at(t.ne,t.nd>0?3:i.eLen[t.ne]-3,0,t.at2),ht=it.fx*t.nd,bt=it.fz*t.nd,xt=Math.acos(Math.max(-1,Math.min(1,T*ht+b*bt)));if(xt>.45){let W=xt>2.5?3:4+5*(1-xt/Math.PI);v=Math.min(v,Math.sqrt(W*W+2*2.6*Math.max(0,I)))}}let z=u[6],Y=u[8];for(let Z of n){if(Z===t||Z.traffic&&!Z.active)continue;let H=Z.veh.px-r.px,tt=Z.veh.pz-r.pz,it=H*z+tt*Y;if(it<2||it>40||Math.abs(H*u[0]+tt*u[2])>2.6)continue;let bt=it-6.5,xt=Math.max(0,Z.veh.vx*z+Z.veh.vz*Y);v=Math.min(v,Math.max(0,xt+bt*.6)),bt<.5&&(v=0)}let B=v-l;r.input.throttle=Math.max(0,Math.min(1,B*.45)),r.input.brake=B<-.3?Math.max(0,Math.min(1,-B*.35)):0,v<.3&&(r.input.throttle=0,r.input.brake=1),r.input.handbrake=0,l<.4&&v>2.5?t.stuck+=e:t.stuck=0}dispose(){for(let t of this.cars)t.view.dispose()}};var ra={flag:7,km:4},_n={red:700,wrong:700,pave:500,fault:300};function Bh(s){return s<20?300:s<30?500:s<40?700:1e3}var On=7,on=()=>(On^=On<<13,On>>>=0,On^=On>>17,On^=On<<5,On>>>=0,On/4294967296),aa=class{constructor(t,e){this.net=t;let n=e||{};this.money=n.money??300,this.fuel=n.fuel??9,this.tank=40,this.stats=Object.assign({rides:0,earned:0,fines:0,repairs:0,fuel:0,km:0,best:0},n.stats),this.peds=[],this.ride=null,this.log=[],this.events=[],this.toasts=[],this.prompt="",this.limiter=0,this.cool={speed:0,pave:0},this.overT=0,this.overMax=0,this.paveT=0,this.wrongT=0,this.wrongE=-1,this.lastE=-1,this.lastRem=1e9,this.lastJ=-1,this.crash=null,this.refuel=!1,this.helpT=0,this.redT=-10,this.wrongNow=0,this.time=0,this.dirty=!1}save(){return{money:Math.round(this.money),fuel:+this.fuel.toFixed(2),stats:this.stats}}pay(t,e){this.money+=t,this.dirty=!0,e&&(this.stats[e]+=Math.abs(t))}toast(t,e){this.toasts.push({text:t,kind:e||"info",t:0})}fine(t,e,n){this.pay(-e,"fines"),this.ride&&this.ride.fines++,this.events.push({kind:"fine",title:"fine_"+t,lines:[[n||"",-e]],total:-e})}update(t,e,n,i){this.time+=t;let r=this.net,a=Math.abs(e.fwdSpeed),o=a*3.6,l=a*t;if(this.stats.km+=l/1e3,this.ride&&this.ride.ped.state==="in"&&(this.ride.km+=l/1e3,this.ride.t+=t),this.fuelTick(t,e),e.topSpeedCap=this.limiter?this.limiter/3.6:1e9,n.edge>=0&&n.junc<0){let c=n.edge,h=n.fx,u=n.fz,m=e.vx*h+e.vz*u>=0?1:-1;c!==this.lastE&&(this.lastE=c,this.lastRem=1e9,this.wrongT=0);let d=m>0?r.eB[c]:r.eA[c],x=m>0?r.eLen[c]-n.s:n.s,g=this.enf?this.enf.officer(e.px,e.pz):null,p=r.jLight[d];if(p>=0&&a>2){let _=r.jr[d]+1;if(this.lastRem>_&&x<=_&&this.lastJ===d){let v=r.slot(c,d),R=v>=0?r.lights[p].ph[v]:0;i(p,R)===2&&(this.redT=this.time,g&&this.fine("red",_n.red,"seenPolice"))}}this.lastRem=x,this.lastJ=d,r.eOne[c]&&m<0&&a>2?(this.wrongT+=t,this.wrongNow=1):(this.wrongT=Math.max(0,this.wrongT-t),this.wrongNow=0),this.wrongT>2.5&&this.wrongE!==c&&(this.redT=this.time,g&&(this.wrongE=c,this.fine("wrong",_n.wrong,r.edgeName(c,this.lang)||"")));let w=n.lim;if(this.limit=w,this.enf){for(let _ of this.enf.cams){if(_.e!==c||m!==_.dir)continue;let v=this.camS,R=n.s;this.camE===c&&v!==void 0&&(v-_.s)*(R-_.s)<=0&&v!==R&&this.time>(_.cool||0)&&(_.cool=this.time+20,this.flash=.25,o>w+5&&this.fine("speed",Bh(o-w),"camSpeed:"+Math.round(o)+" km/h / "+w))}this.camE=c,this.camS=n.s}o>w+5&&g?(this.overT+=t,this.overMax=Math.max(this.overMax,o-w)):(this.overT=Math.max(0,this.overT-t*2),this.overT===0&&(this.overMax=0)),this.overT>3&&this.time>this.cool.speed&&(this.fine("speed",Bh(this.overMax),"policeSpeed:"+Math.round(w+this.overMax)+" km/h / "+w),this.cool.speed=this.time+40,this.overT=0,this.overMax=0),n.off>=1&&Math.abs(n.d)>n.hl+1.2&&a>3&&g?this.paveT+=t:this.paveT=Math.max(0,this.paveT-t),this.paveT>1.2&&this.time>this.cool.pave&&(this.fine("pave",_n.pave,"seenPolice"),this.cool.pave=this.time+30,this.paveT=0)}else this.wrongNow=0;this.speeding=this.overT>0,this.peopleTick(t,e,n),this.crashTick(t),this.prompt="",e.fuelCut&&this.fuel<=.01?this.prompt=this.helpT>0?"helpWait":"help":this.refuel?this.prompt="stop":this.nearStation(e)&&a<1.2&&this.fuel<this.tank-.5?this.prompt="refuel":this.ride&&this.ride.ped.state==="in"&&this.atDest(e)&&a<1.6?this.prompt="dropoff":!this.ride&&a<1.6&&this.nearPed(e)&&(this.prompt="pickup",this.quote(e,n,this.nearPed(e)))}fuelTick(t,e){if(this.helpT>0){if(this.helpT-=t,this.helpT<=0){let l=150+Math.round(120.60000000000001);this.fuel+=6,this.pay(-l,"fuel"),e.fuelCut=!1,e.stalled=!1,this.events.push({kind:"help",title:"helpDone",lines:[["helpService",-150],["helpFuel",-(l-150)]],total:-l})}return}if(this.refuel){let o=Math.min(this.tank-this.fuel,5*t);this.fuel+=o,this.pay(-o*13.4,"fuel"),this.refuelL+=o,(this.fuel>=this.tank-.01||this.money<0)&&this.stopRefuel();return}if(e.fuelCut||e.stalled)return;let n=e.input.throttle,i=Math.max(e.rpm,800),a=.7+.26*Math.max(0,e.engineTorque(i)*n*i*Math.PI/30/1e3);this.fuel-=a/3600*t*4,this.fuel<=0&&(this.fuel=0,e.fuelCut=!0,this.toast("outOfFuel","bad"),this.dirty=!0),this.fuel<4&&!this.lowSaid&&(this.lowSaid=!0,this.toast("lowFuel","warn")),this.fuel>6&&(this.lowSaid=!1)}stopRefuel(){this.refuel=!1,this.refuelL>.05&&this.events.push({kind:"fuel",title:"refuelDone",lines:[["litres:"+this.refuelL.toFixed(1),-Math.round(this.refuelL*13.4)]],total:-Math.round(this.refuelL*13.4)}),this.dirty=!0}nearStation(t){let e=this.net;for(let n of e.stations){let i=e.eOff[n.e]+n.k;if(Math.hypot(e.px[i]-t.px,e.pz[i]-t.pz)<16)return!0}return!1}action(t,e){let n=this.prompt;n==="help"?(this.helpT=9,this.toast("helpComing","info")):n==="refuel"?(this.refuel=!0,this.refuelL=0):n==="stop"?this.stopRefuel():n==="pickup"?this.pickup(t,e):n==="dropoff"&&this.dropoff(t)}spawnPed(t,e){let n=this.net,i=Math.atan2(t.R[6],t.R[8]);for(let r=0;r<20;r++){let a=on()<.7?i+(on()-.5)*2:on()*Math.PI*2,o=40+on()*280;n.query(t.px+Math.sin(a)*o,t.pz+Math.cos(a)*o,-1,e);let l=e.edge;if(l<0||e.junc>=0||n.eCls[l]===0||n.eLen[l]<30||e.s<10||e.s>n.eLen[l]-10)continue;let c=on()<.5?1:-1,h=e.i;if((c>0?n.pl[h]:n.pr[h])<1.5)continue;let u=n.at(l,e.s,c*(n.eHw[l]+1.2),{});if(this.peds.some(m=>Math.hypot(m.x-u.x,m.z-u.z)<45))continue;let f=this.pickDest(u.x,u.z,e);if(f){this.peds.push({x:u.x,y:u.y+.15,z:u.z,yaw:Math.atan2(-c*u.lx,-c*u.lz),e:l,s:e.s,side:c,state:"wait",t:on()*3,kind:on()*6|0,dest:f});return}}}pickDest(t,e,n){let i=this.net;for(let r=0;r<12;r++){let a=on()*Math.PI*2,o=800+on()*2700;i.query(t+Math.sin(a)*o,e+Math.cos(a)*o,-1,n);let l=n.edge;if(l<0||n.junc>=0||i.eLen[l]<30||i.eCls[l]===0)continue;let c=Math.max(10,Math.min(i.eLen[l]-10,n.s)),h=i.at(l,c,0,{}),u=Math.hypot(h.x-t,h.z-e)*1.3/1e3;return{e:l,s:c,name:i.edgeName(l,this.lang)||i.areaName(h.x,h.z,this.lang),km:u,fare:Math.round(ra.flag+ra.km*u)}}return null}peopleTick(t,e,n){let i=this.ride?2:6,r=0;for(let a of this.peds)a.state==="wait"&&r++;r<i&&this.time%.25<t&&this.spawnPed(e,this.q2||(this.q2={}));for(let a=this.peds.length-1;a>=0;a--){let o=this.peds[a];if(o.t+=t,o.state==="wait"&&Math.hypot(o.x-e.px,o.z-e.pz)>500){this.peds.splice(a,1);continue}if(o.state==="walk"){let l=e.R,c=e.px+l[0]*1.1*(o.side>0?1:-1)-o.x,h=e.pz+l[2]*1.1*(o.side>0?1:-1)-o.z,u=Math.hypot(c,h);if(u<.6||o.t>3)o.state="in",this.ride.t=0,this.toast("boarded","ok");else{let f=Math.min(u,2.2*t);o.x+=c/u*f,o.z+=h/u*f,o.yaw=Math.atan2(c,h)}}o.state==="out"&&(o.x+=Math.sin(o.yaw)*1.4*t,o.z+=Math.cos(o.yaw)*1.4*t,o.t>4&&this.peds.splice(a,1)),o.state==="gone"&&this.peds.splice(a,1)}}nearPed(t){let e=null,n=11;for(let i of this.peds){if(i.state!=="wait")continue;let r=Math.hypot(i.x-t.px,i.z-t.pz);r<n&&(n=r,e=i)}return e}quote(t,e,n){if(n.quote&&Math.hypot(n.quote.x-t.px,n.quote.z-t.pz)<3)return n.quote;let i=this.net,r=this.q2||(this.q2={}),a=e.edge>=0?t.R[6]*e.fx+t.R[8]*e.fz>=0?1:-1:1;n.quote=null;for(let o=0;o<6&&!n.quote;o++){let l=o===0?n.dest:this.pickDest(n.x,n.z,r);if(!l)continue;let c=i.route(e.edge>=0?e.edge:l.e,e.edge>=0?e.s:0,a,l.e,l.s);!c||c.len<500||c.len>7e3||(n.dest=l,n.quote={x:t.px,z:t.pz,route:c,km:c.len/1e3,fare:Math.round(ra.flag+ra.km*c.len/1e3),name:l.name})}return n.quote}pickup(t,e){let n=this.nearPed(t);if(!n)return;let i=this.net,r=this.quote(t,e,n);if(!r){this.toast("noDest","warn"),n.state="out",n.t=0;return}let a=n.dest,o=r.route,l=on()<.5?1:-1,c=i.at(a.e,a.s,l*(i.eHw[a.e]+1.7),{});n.state="walk",n.t=0,this.ride={ped:n,e:a.e,s:a.s,side:l,x:c.x,y:c.y,z:c.z,route:o,len:o.len,eta:o.len/8.2+45,t:0,km:0,hits:0,fines:0,scare:0,name:a.name,fare:r.fare,routeT:0},this.toast("pickup","ok")}atDest(t){let e=this.ride;return e&&Math.hypot(e.x-t.px,e.z-t.pz)<this.net.eHw[e.e]+14}meter(){let t=this.ride;return t?t.fare:0}dropoff(t){let e=this.ride;if(!e)return;let n=this.meter(),i=[["fareKm:"+(e.len/1e3).toFixed(1),Math.round(n)]],r=n,a=e.t-e.eta;if(a>0){let l=Math.min(.6,Math.ceil(a/15)*.1);i.push(["lateBy:"+Math.round(a),-Math.round(n*l)]),r-=n*l}if(e.hits>0){let l=Math.min(1,e.hits*.25);i.push(["bumps:"+e.hits,-Math.round(n*l)]),r-=n*l}if(a<=0&&e.hits===0&&e.fines===0){let l=Math.max(2,Math.round(n*(.1+on()*.1)));i.push(["tip",l]),r+=l}r=Math.max(0,Math.round(r)),this.pay(r,"earned"),this.stats.rides++,this.stats.best=Math.max(this.stats.best,r),this.events.push({kind:"ride",title:"rideDone",lines:i,total:r});let o=e.ped;o.state="out",o.t=0,o.x=t.px+t.R[0]*2.2*e.side,o.z=t.pz+t.R[2]*2.2*e.side,o.y=e.y+.15,o.yaw=Math.atan2(t.R[6],t.R[8]),this.peds.includes(o)||this.peds.push(o),this.ride=null}hitPed(t){let e=Math.round((800+t*60)/10)*10,n=[["impact:"+Math.round(t),0],["pedHurt",-e],["fineFault",-_n.fault]],i=-e-_n.fault;this.money+=i,this.stats.repairs+=e,this.stats.fines+=_n.fault,this.dirty=!0,this.ride&&this.ride.hits++,this.events.push({kind:"crash",title:"fine_ped",lines:n,total:i})}hit(t,e,n){if(t<1.3)return;this.crash||(this.crash={t:0,rel:0,car:!1,fault:!1,wall:!1});let i=this.crash;i.rel=Math.max(i.rel,t),i.t=0,e?(i.car=!0,i.fault=i.fault||n):i.wall=!0}crashTick(t){let e=this.crash;if(!e||(e.t+=t,e.t<1.2))return;this.crash=null;let n=Math.round(e.rel*3.6),i=e.wall||e.fault||this.time-this.redT<4,r=[["impact:"+n,0]],a=Math.min(14e3,Math.round(e.rel*e.rel*18/10)*10),o=0;if(i?(r.push(["repairOwn",-a]),o-=a):r.push(["repairInsured",0]),e.car&&i){let l=Math.min(14e3,Math.round(a*.9/10)*10);r.push(["repairOther",-l]),o-=l,r.push(["fineFault",-_n.fault]),o-=_n.fault,this.stats.fines+=_n.fault}if(this.money+=o,this.stats.repairs+=-o-(e.car&&i?_n.fault:0),this.dirty=!0,this.ride&&this.ride.ped.state==="in"){if(this.ride.hits++,i&&e.rel>6){let l=Math.round((200+e.rel*40)/10)*10;r.push(["passengerHurt",-l]),o-=l,this.money-=l,this.stats.repairs+=l}if(e.rel>8.5){let l=this.ride.ped;l.state="gone",this.ride=null,r.push(["passengerLeft",0])}}this.events.push({kind:"crash",title:i?e.car?"crashYou":"crashWall":"crashThem",lines:r,total:o})}};var kh=[[[200,60,50],[40,50,80]],[[230,220,200],[90,70,50]],[[60,120,180],[50,50,55]],[[150,60,140],[30,30,40]],[[245,245,240],[245,245,240]],[[80,140,80],[60,60,70]]],oa=[[200,150,110],[170,120,85],[215,170,130]];function xg(s,t,e,n,i,r,a,o,l,c,h){let u=[[i,r,a],[o,r,a],[o,l,a],[i,l,a],[i,r,c],[o,r,c],[o,l,c],[i,l,c]],f=[[0,3,2,1,0,0,-1],[4,5,6,7,0,0,1],[0,4,7,3,-1,0,0],[1,2,6,5,1,0,0],[3,7,6,2,0,1,0],[0,1,5,4,0,-1,0]];for(let m of f){let d=s.length/3;for(let x=0;x<4;x++){let g=u[m[x]];s.push(g[0],g[1],g[2]),t.push(m[4]*127,m[5]*127,m[6]*127,0),e.push(h[0],h[1],h[2],0)}n.push(d,d+1,d+2,d,d+2,d+3)}}function Hh(s){let t=[],e=[],n=[],i=[];for(let a of s)xg(t,e,n,i,...a);let r=new me;return r.setAttribute("position",new Ot(new Float32Array(t),3)),r.setAttribute("normal",new Ot(new Int8Array(e),4,!0)),r.setAttribute("col",new Ot(new Uint8Array(n),4,!0)),r.setIndex(i),r.computeBoundingSphere(),r}var la=class{constructor(t,e=8){this.scene=t,this.mat=ls(),this.bodies=kh.map((n,i)=>{let r=oa[i%oa.length];return Hh([[-.17,0,-.1,-.02,.85,.1,n[1]],[.02,0,-.1,.17,.85,.1,n[1]],[-.22,.85,-.13,.22,1.45,.13,n[0]],[-.3,.88,-.07,-.22,1.42,.07,n[0]],[-.11,1.46,-.11,.11,1.72,.11,r],[-.12,1.68,-.12,.12,1.76,.12,[40,30,25]]])}),this.arms=kh.map((n,i)=>Hh([[-.04,-.55,-.07,.04,.02,.07,n[0]],[-.045,-.68,-.06,.045,-.55,.06,oa[i%oa.length]]])),this.arrowGeo=new ss(.32,.75,4),this.arrowGeo.rotateX(Math.PI),this.arrowGeo.translate(0,.375,0),this.arrowMat=new Un({color:2949007,fog:!1}),this.pool=[];for(let n=0;n<e;n++){let i=new pn,r=new Jt(this.bodies[n%this.bodies.length],this.mat),a=new Jt(this.arms[n%this.arms.length],this.mat);a.position.set(.26,1.42,0);let o=new Jt(this.arrowGeo,this.arrowMat);o.visible=!1,i.add(r),i.add(a),i.add(o),i.visible=!1,t.add(i),this.pool.push({g:i,body:r,arm:a,arrow:o})}}update(t,e,n,i){for(let r=0;r<this.pool.length;r++){let a=this.pool[r],o=r<e.length?e[r]:n[r-e.length],l=o?Math.hypot(o.x-i.x,o.z-i.z):1e9;if(!o||o.state==="in"||o.state==="gone"||o.live===!1||l>(o.state==="wait"?420:260)){a.g.visible=!1;continue}if(a.g.visible=!0,a.body.geometry!==this.bodies[o.kind]&&(a.body.geometry=this.bodies[o.kind],a.arm.geometry=this.arms[o.kind]),a.g.position.set(o.x,o.y,o.z),a.g.rotation.y=o.yaw,a.arrow.visible=o.state==="wait",a.arrow.visible){let c=Math.max(1,l/22);a.arrow.scale.setScalar(c),a.arrow.position.y=2.1+.25*c+Math.abs(Math.sin(o.t*3))*.35*c,a.arrow.rotation.y=o.t*1.5}o.state==="wait"?(a.arm.rotation.z=Math.PI*.85+Math.sin(o.t*7)*.25,a.arm.rotation.x=0):(a.arm.rotation.z=.1,a.arm.rotation.x=Math.sin(o.t*8)*.5),a.body.position.y=o.state==="wait"?0:Math.abs(Math.sin(o.t*8))*.04}}dispose(){for(let t of this.pool)this.scene.remove(t.g);for(let t of this.bodies.concat(this.arms))t.dispose();this.arrowGeo.dispose(),this.arrowMat.dispose(),this.mat.dispose()}};var Bn=1592594996,ln=()=>(Bn^=Bn<<13,Bn>>>=0,Bn^=Bn>>17,Bn^=Bn<<5,Bn>>>=0,Bn/4294967296),ca=class{constructor(t,e){this.net=t,this.q={},this.at={},this.list=[];for(let n=0;n<e;n++)this.list.push({x:0,y:-1e4,z:0,yaw:0,e:-1,s:0,side:1,dir:1,sp:1.3,d:0,t:ln()*3,kind:n%6,state:"stroll",live:!1})}place(t,e,n,i,r,a){let o=this.net,l=this.q;for(let c=0;c<12;c++){let h=ln()<.75?a+(ln()-.5)*2.2:ln()*Math.PI*2,u=i+ln()*(r-i);o.query(e+Math.sin(h)*u,n+Math.cos(h)*u,-1,l);let f=l.edge;if(f<0||l.junc>=0||o.eCls[f]===0||o.eLen[f]<40)continue;let m=ln()<.5?1:-1,d=l.i;if((m>0?o.pl[d]:o.pr[d])<de-.05)continue;let x=Math.max(o.jr[o.eA[f]]+6,Math.min(o.eLen[f]-o.jr[o.eB[f]]-6,l.s));if(t.e=f,t.s=x,t.side=m,t.dir=ln()<.5?1:-1,t.sp=1.1+ln()*.5,t.d=m*(o.eHw[f]+1.1+ln()*(de-2.2)),t.kind=ln()*6|0,t.live=!0,this.move(t,0))return!0}return t.live=!1,t.y=-1e4,!1}move(t,e){let n=this.net,i=t.e;t.s+=t.dir*t.sp*e;let r=n.jr[n.eA[i]]+5,a=n.eLen[i]-n.jr[n.eB[i]]-5;t.s<r?(t.s=r,t.dir=1):t.s>a&&(t.s=a,t.dir=-1);let o=n.at(i,t.s,t.d,this.at),l=n.query(o.x,o.z,-1,this.q),c=n.eOff[i]+Math.min(n.eN[i]-1,Math.max(0,Math.round(t.s/4)));if((t.side>0?n.pl[c]:n.pr[c])<de-.05||Math.abs(l.d)-l.hl<.6||l.junc>=0){if(e===0)return!1;t.s-=t.dir*t.sp*e,t.dir=-t.dir,o=n.at(i,t.s,t.d,this.at)}return t.x=o.x,t.y=o.y+.15,t.z=o.z,t.yaw=Math.atan2(o.fx*t.dir,o.fz*t.dir),t.t+=e,!0}update(t,e,n,i){for(let r of this.list){if(r.live&&(r.x-e)*(r.x-e)+(r.z-n)*(r.z-n)>240*240&&(r.live=!1),!r.live){(r.wait=(r.wait||0)-t)<=0&&(r.wait=.3+ln()*.3,this.place(r,e,n,r.e<0?15:60,180,i));continue}this.move(r,t)}}};var kn=13254170,us=()=>(kn^=kn<<13,kn>>>=0,kn^=kn>>17,kn^=kn<<5,kn>>>=0,kn/4294967296),Vh=90;var ha=class{constructor(t){this.net=t,this.cams=[],this.police=[];let e={},n={},i=(a,o,l)=>(t.at(a,o,l,n),t.query(n.x,n.z,-1,e),e.edge>=0&&(Math.abs(e.d)-e.hl<.8||e.junc>=0)?null:{x:n.x,y:n.y,z:n.z,fx:n.fx,fz:n.fz,lx:n.lx,lz:n.lz}),r=(a,o,l,c)=>a.every(h=>(h.x-o)*(h.x-o)+(h.z-l)*(h.z-l)>c*c);for(let a=0;a<t.ne;a++){let o=t.eCls[a],l=t.eLen[a];if(o<=3&&l>=160&&us()<.16){let c=t.eOne[a]||us()<.5?1:-1,h=l*(.35+us()*.3),u=-c,f=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4));if((u>0?t.pl[f]:t.pr[f])>=de-.05){let m=i(a,h,u*(t.eHw[a]+.9));m&&r(this.cams,m.x,m.z,400)&&this.cams.push(Object.assign(m,{e:a,s:h,dir:c,side:u,yaw:Math.atan2(-c*m.fx,-c*m.fz)}))}}if(o<=4&&l>=90&&us()<.05){let c=us()<.5?1:-1,h=l*(.3+us()*.4),u=t.eOff[a]+Math.min(t.eN[a]-1,Math.round(h/4)),f=h+5.5*c,m=t.eOff[a]+Math.min(t.eN[a]-1,Math.max(0,Math.round(f/4)));if((c>0?t.pl[u]:t.pr[u])>=de-.05&&(c>0?t.pl[m]:t.pr[m])>=de-.05&&f>8&&f<l-8&&i(a,f,c*(t.eHw[a]+1.75))){let d=i(a,h,c*(t.eHw[a]+1.4));d&&r(this.police,d.x,d.z,500)&&this.police.push(Object.assign(d,{e:a,s:h,side:c,yaw:Math.atan2(-c*d.lx,-c*d.lz)}))}}}}officer(t,e){let n=null,i=Vh*Vh;for(let r of this.police){let a=(r.x-t)*(r.x-t)+(r.z-e)*(r.z-e);a<i&&(i=a,n=r)}return n}};je.taxi={model:"tr_taxi",cls:"T",mass:1180,power:66,torque:200,rpm:4600,gears:[3.73,2.05,1.32,.97,.76],final:4.21,cda:.68,cl:0,mu:1,steer:.62,nitro:0,drive:"f",turbo:1,cyl:4,diesel:1,shift:.4};var vg=1745860,_g=15909912;je.taxi_city=Object.assign({},je.city,{cls:"T",nitro:0});je.taxi_hatch=Object.assign({},je.hatch,{cls:"T",nitro:0});var yg=s=>s==="city"?je.taxi_city:s==="hatch"?je.taxi_hatch:je.taxi;function Mg(){we.uSun.value.set(.45,.75,-.48).normalize(),we.uSunCol.value.setRGB(1,.95,.86),we.uSky.value.setRGB(.55,.72,.95),we.uGround.value.setRGB(.42,.38,.32),we.uFog.value.setRGB(.76,.83,.92),we.uNight.value=0}var Gh=2,ua=new Float32Array(8),fa=class{constructor(t,e,n,i){this.renderer=t,this.net=e,this.quality=n,this.opts=i,this.scene=new Ur,Mg();let r=n.tier==="low"?480:n.tier==="mid"?620:800;we.uFogFar.value=r,we.uFogNear.value=r*.3,this.far=r,this.detailFar=r*.5,this.city=new ia(this.scene,e,n),this.city.reach=r+60;let a=yg(i.car);this.me={veh:new os(a,Fs(a.model),i.upgrades),spec:a,player:0,wreck:0,traffic:!1,active:!0},this.me.view=new cs(this.scene,a.model,vg,_g);let o=this.me.veh;o.gearbox=i.gearbox==="auto"?null:i.gearbox,o.mgear=1,this.q={},this.qp={},this.taxi=new aa(e,i.saved),this.taxi.lang=i.lang,this.enforce=new ha(e),this.taxi.enf=this.enforce,this.city.addEnforce(this.enforce),this.start(i.start),this.traffic=new sa(this.scene,e,n.tier==="low"?9:13),this.all=[this.me].concat(this.traffic.cars),this.walkers=new ca(e,n.tier==="low"?8:16),this.people=new la(this.scene,10+this.walkers.list.length),this.cam=new ta(16/9,r+60),this.cam.shakeOn=n.tier!=="low",this.fx=new na(this.scene,n.tier,jr(8947848));let l=new Ps(1.4,1.4,60,10,1,!0);l.translate(0,30,0);let c=new Uint8Array(l.attributes.position.count*4);for(let h=0;h<l.attributes.position.count;h++){let u=l.attributes.position.getY(h);c[h*4]=40,c[h*4+1]=255,c[h*4+2]=140,c[h*4+3]=u<1?200:0}l.setAttribute("col",new Ot(c,4,!0)),this.beacon=new Jt(l,new ue({transparent:!0,depthWrite:!1,side:nn,blending:Si,vertexShader:"attribute vec4 col; varying vec4 vC; void main(){ vC = col; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"varying vec4 vC; void main(){ gl_FragColor = vec4(vC.rgb * vC.a * 0.9, 1.0); }"})),this.beacon.visible=!1,this.beacon.renderOrder=4,this.beacon.frustumCulled=!1,this.scene.add(this.beacon),this.race={players:[this.me],racers:this.all},this.lightT=0,this.routeT=0,this.time=0,this.city.stream(o.px,o.pz,0,!0),this.city.setLamps((h,u)=>zs(e,h,u,this.traffic.t)),this.frameMs=16.7,this.scale=n.scale||1,this.lateFrames=0,this.goodFrames=0,this.size=new jt,this.shiftMsg=""}start(t){let e=this.net,n=this.q,i=t?t.x:2350,r=t?t.z:-1780,a=-1,o=1e18;for(let u=0;u<e.ne;u++){if(e.eCls[u]>3||e.eLen[u]<60)continue;let f=e.eOff[u]+(e.eN[u]>>1),m=Math.hypot(e.px[f]-i,e.pz[f]-r);m<o&&(o=m,a=u)}let l=a,c=e.at(l,e.eLen[l]/2,e.eOne[l]?0:-e.eHw[l]*.5,{}),h=this.me.veh;h.setPose(c.x,c.y+h.cgY+.45,c.z,Math.atan2(c.fx,c.fz))}pedHits(t,e){let n=t.R,i=a=>{let o=a.x-t.px,l=a.z-t.pz;return o*o+l*l>16?!1:Math.abs(o*n[0]+l*n[2])<1.1&&Math.abs(o*n[6]+l*n[8])<2.5&&Math.abs(a.y-t.py)<2.5},r=Math.abs(t.fwdSpeed)*3.6;for(let a of this.walkers.list)a.live&&i(a)&&(a.live=!1,a.wait=6,e.hitPed(r),this.onSound&&this.onSound("hit",this.me,5));for(let a of e.peds)a.state==="wait"&&i(a)&&(a.state="gone",e.hitPed(r),this.onSound&&this.onSound("hit",this.me,5))}update(t,e){this.time+=t;let n=this.me,i=n.veh,r=e.ctl,a=this.taxi;i.input.steer=r.steer,i.input.throttle=r.throttle,i.input.brake=r.brake,i.input.handbrake=r.handbrake,i.input.clutch=r.clutch;let o=e.edge;o.camera&&(this.cam.mode=(this.cam.mode+1)%3),i.gearbox&&(o.gearUp||o.gearDown)&&i.shift(o.gearUp?1:-1)==="clutch"&&a.toast("needClutch","warn"),o.up&&(a.limiter=a.limiter?Math.min(130,a.limiter+10):Math.max(30,Math.ceil(Math.abs(i.fwdSpeed)*3.6/10)*10)),o.down&&a.limiter&&(a.limiter=a.limiter<=30?0:a.limiter-10),o.action&&a.action(i,this.qp),i.hold=!!(a.refuel||a.helpT>0),i.hold&&(i.input.throttle=0,i.input.brake=0),this.traffic.update(t,this.all,n,this.q);let l=t/Gh,c=this.all,h=this.net,u=this.q;for(let d=0;d<Gh;d++){for(let x=0;x<c.length;x++){let g=c[x];if(!g.active)continue;g.veh.step(l,h,u),g.veh.groundY=u.y,this.wall(g.veh)>0&&g===n&&this.onHit(null,le.rel)}for(let x=0;x<c.length;x++){let g=c[x];if(g.active)for(let p=x+1;p<c.length;p++){let w=c[p];!w.active||Dh(g.veh,w.veh)<=0||(le.rel>3&&this.fx.spark(le.px,le.py,le.pz,g.veh.vx,g.veh.vz,Math.min(12,2+le.rel*.5|0)),g===n||w===n?this.onHit(g===n?w:g,le.rel,g===n):le.rel>4&&(g.wreck=g.wreck||0,w.stuck=(w.stuck||0)+1))}}}if(h.query(i.px,i.pz,i.hint,this.qp),a.update(t,i,this.qp,(d,x)=>zs(h,d,x,this.traffic.t)),a.ride&&a.ride.ped.state==="in"&&(this.routeT-=t)<=0&&this.qp.edge>=0){this.routeT=4;let d=a.ride,x=i.R[6]*this.qp.fx+i.R[8]*this.qp.fz>=0?1:-1,g=h.route(this.qp.edge,this.qp.s,x,d.e,d.s);g&&(d.route=g,d.left=g.len)}(this.lightT-=t)<=0&&(this.lightT=.25,this.city.setLamps((d,x)=>zs(h,d,x,this.traffic.t))),we.uTime.value+=t;let f=this.fx;for(let d=0;d<4;d++){let x=i.wheels[d],g=Math.max(x.slipLat,x.slipLong);x.contact&&g>.35&&i.speed>4?(f.skids.add(d,x.cx,x.cy,x.cz,i.R[0],i.R[2],g),Math.random()<g*.4&&f.puff(x.cx,x.cy,x.cz,i.vx,i.vz,g)):f.skids.add(d,0,0,0,0,0,0)}f.update(t),this.walkers.update(t,i.px,i.pz,Math.atan2(i.R[6],i.R[8])),Math.abs(i.fwdSpeed)>1.5&&this.pedHits(i,a),this.people.update(t,a.peds,this.walkers.list,this.cam.cam.position),this.cam.update(t,n);let m=a.ride;this.beacon.visible=!!(m&&m.ped.state==="in"),this.beacon.visible&&this.beacon.position.set(m.x,m.y,m.z)}onHit(t,e,n){let i=this.me.veh;this.cam.kick(Math.min(.8,e*.04)),this.onSound&&this.onSound("hit",this.me,e);let r=!0;if(t){let a=le.nx*(n?1:-1),o=le.nz*(n?1:-1),l=i.vx*a+i.vz*o,c=-(t.veh.vx*a+t.veh.vz*o);r=l>c+.6||t.veh.speed<.8}this.taxi.hit(e,t,r)}wall(t){let e=t.R,n=this.q,i=e[0],r=e[2],a=Math.hypot(i,r)||1;i/=a,r/=a;let o=e[6],l=e[8],c=Math.hypot(o,l)||1;o/=c,l/=c;let h=0;for(let I=-1;I<=1;I+=2)for(let z=-1;z<=1;z+=2)ua[h++]=t.px-e[6]*t.cgZ+i*t.half.x*I+o*t.half.z*z,ua[h++]=t.pz-e[8]*t.cgZ+r*t.half.x*I+l*t.half.z*z;let u=0,f=0,m=0,d=0,x=0;for(let I=0;I<4;I++){let z=ua[I*2],Y=ua[I*2+1];if(this.net.query(z,Y,t.hint,n),n.junc>=0||n.edge<0)continue;let B=Math.abs(n.d)-n.wall;if(B>u){u=B,f=z,m=Y;let Z=n.d>=0?-1:1;d=n.lx*Z,x=n.lz*Z}}if(u<=0)return 0;t.px+=d*u,t.pz+=x*u;let g=t.py+.15,p=f-t.px,w=g-t.py,_=m-t.pz,v=t.vx+(t.wy*_-t.wz*w),R=t.vy+(t.wz*p-t.wx*_),T=t.vz+(t.wx*w-t.wy*p),b=v*d+T*x;if(b>=0)return 0;let P=t.invMassAt(p,w,_,d,0,x),M=-(1+.15)*b/P;t.impulse(d*M,0,x*M,p,w,_);let y=v-d*b,A=T-x*b,L=Math.hypot(y,A);if(L>.05){let I=Math.min(M*.3,L/P);t.impulse(-y/L*I,0,-A/L*I,p,w,_)}return le.j=M,le.rel=-b,le.nx=d,le.nz=x,le.px=f,le.py=g,le.pz=m,M}render(t){let e=this.renderer,n=this.cam.cam;this.budget(t),e.getSize(this.size),n.aspect=this.size.x/this.size.y,n.updateProjectionMatrix();let i=this.me.veh;this.city.stream(i.px,i.pz,this.quality.tier==="low"?3:5,!1),this.city.cull(n.position.x,n.position.z,this.far,this.detailFar),this.city.sky.position.copy(n.position);for(let r of this.all){if(!r.active){r.view.root.visible=!1,r.view.shadow.visible=!1;continue}let a=r.veh.px-n.position.x,o=r.veh.pz-n.position.z;r.view.sync(r.veh,Math.sqrt(a*a+o*o),0,r.veh.input.brake>.2?1:0)}this.fx.streaks.update(1/60,n,0,!1),e.render(this.scene,n)}budget(t){if(!t)return;t>18.5?this.lateFrames++:this.lateFrames=Math.max(0,this.lateFrames-1),t<15.5?this.goodFrames++:this.goodFrames=0;let e=this.quality.minScale||.5,n=this.quality.scale||1;this.lateFrames>10&&this.scale>e?(this.scale=Math.max(e,this.scale-.1),this.lateFrames=0,this.onScale&&this.onScale(this.scale)):this.goodFrames>240&&this.scale<n&&(this.scale=Math.min(n,this.scale+.05),this.goodFrames=0,this.onScale&&this.onScale(this.scale))}dispose(){this.city.dispose(),this.traffic.dispose(),this.me.view.dispose(),this.people.dispose(),this.scene.remove(this.beacon),this.beacon.geometry.dispose(),this.beacon.material.dispose();let t=this.fx;for(let e of[t.sparks.points,t.smoke.points,t.skids.mesh,t.streaks.lines])e.geometry.dispose(),e.material.dispose()}};var xe={A:0,B:1,X:2,Y:3,L:4,R:5,ZL:6,ZR:7,MINUS:8,PLUS:9,UP:12,DOWN:13,LEFT:14,RIGHT:15},da=class{constructor(){this.pads={},this.acts={},this.ctl={steer:0,throttle:0,brake:0,handbrake:0,clutch:0},this.edge={action:0,up:0,down:0,camera:0,map:0},this.prev={},this.hit=new Uint8Array(24),this.actHit={},this.menuCb=null,this.dead=.14,this.steerNow=0}pad(t){return this.pads[t]||(this.pads[t]={b:new Float32Array(24),a:new Float32Array(4)})}onAction(t,e,n,i){if(n){this.menuCb&&this.menuCb(t,i,!0);return}i&&i.indexOf("pad")===0||((this.acts[i]||(this.acts[i]={}))[t]=e,e&&(this.actHit[t]=1)),e&&this.menuCb&&this.menuCb(t,i,!1)}onButton(t,e,n,i){this.pad(i).b[t]=e?Math.max(.01,n||1):0,e&&t<24&&(this.hit[t]=1)}onAxes(t,e){let n=this.pad(e);for(let i=0;i<4&&i<t.length;i++)n.a[i]=t[i]}btn(t){let e=0;for(let n in this.pads){let i=this.pads[n].b[t];i>e&&(e=i)}return e}axis(t){let e=0;for(let n in this.pads){let i=this.pads[n].a[t];Math.abs(i)>Math.abs(e)&&(e=i)}return e}act(t){for(let e in this.acts)if(this.acts[e][t])return 1;return 0}rise(t,e){let n=e&&!this.prev[t]?1:0;return this.prev[t]=e,n}poll(t){let e=this.ctl,n=this.axis(0);n=Math.abs(n)>this.dead?(n-Math.sign(n)*this.dead)/(1-this.dead):0;let i=(this.btn(xe.LEFT)>0||this.act("left")?1:0)-(this.btn(xe.RIGHT)>0||this.act("right")?1:0);i?(this.steerNow+=(i-this.steerNow)*Math.min(1,t*5),e.steer=this.steerNow):(this.steerNow=0,e.steer=-Math.sign(n)*Math.pow(Math.abs(n),1.5)),e.throttle=Math.max(this.btn(xe.ZR),this.act("up")),e.brake=Math.max(this.btn(xe.ZL),this.act("down")),e.handbrake=this.btn(xe.B)>.3?1:0;let r=this.btn(xe.X);e.clutch=r>.02&&r<.98?r:r>=.98?1:Math.max(0,e.clutch-t/.9);let a=this.edge,o=this.hit,l=(c,h,u)=>{let f=h?!this.prev[c]||u?1:0:u?1:0;return this.prev[c]=h,f};a.action=l("action",this.btn(xe.A)>.3||!!this.act("jump"),o[xe.A]===1||this.actHit.jump===1),a.camera=l("camera",this.btn(xe.Y)>.3,o[xe.Y]===1),a.up=l("up",this.btn(xe.UP)>.3,o[xe.UP]===1),a.down=l("down",this.btn(xe.DOWN)>.3,o[xe.DOWN]===1),a.gearUp=l("gu",this.btn(xe.R)>.3,o[xe.R]===1),a.gearDown=l("gd",this.btn(xe.L)>.3,o[xe.L]===1),a.map=l("map",this.btn(xe.MINUS)>.3,o[xe.MINUS]===1),o.fill(0),this.actHit={}}clearHeld(){this.hit.fill(0),this.actHit={};for(let t in this.acts)this.acts[t]={};for(let t in this.pads)this.pads[t].b.fill(0),this.pads[t].a.fill(0);this.prev={}}hasPad(){for(let t in this.pads)return!0;return!1}};var pa={en:{tag:"Drive the real streets of Tangier",press:"Press OK to start",start:"Start the shift",settings:"Settings",help:"Controls",resume:"Resume",quit:"End the shift",back:"Back",gearbox:"Gearbox",auto:"Automatic",manual:"Manual",clutch:"Manual + clutch",limiter:"Speed limiter",off:"Off",money:"Cash",rides:"Rides",fuel:"Fuel",paused:"Paused",pickup:"Pick up the passenger",dropoff:"Drop off the passenger",refuel:"Refuel",stop:"Stop refuelling",help_:"Call roadside help",helpWait:"Help is on its way\u2026",to:"To",eta:"Time left",late:"Late",meter:"Meter",fine_speed:"Fine: speeding",fine_red:"Fine: red light",fine_wrong:"Fine: wrong way (one-way street)",fine_pave:"Fine: driving on the pavement",rideDone:"Ride paid",crashYou:"Accident: your fault",crashThem:"Accident: the other driver's fault",crashWall:"Accident: you hit the kerb wall",impact:"Impact at {0} km/h",repairOwn:"Repairs to your taxi",repairOther:"Damage to the other car",repairInsured:"Repairs paid by the other driver's insurance",fineFault:"Fine: loss of control",passengerLeft:"The passenger got out without paying",helpDone:"Roadside help",helpService:"Call-out",helpFuel:"6 L of diesel",refuelDone:"Refuelled",litres:"{0} L of diesel",tip:"Tip",bumps:"Bumps on the way ({0})",lateBy:"Late by {0} s",meterKm:"Meter, {0} km",outOfFuel:"Out of fuel! Press A to call roadside help.",lowFuel:"Fuel is low: find a fuel station (green on the map).",helpComing:"Help is coming",boarded:"Passenger on board: follow the green route",noDest:"The passenger changed their mind",needClutch:"Press the clutch (X) to change gear",stalled:"Stalled: press the clutch fully to restart",limit:"Limit",total:"Total",wrongWay:"WRONG WAY",slowDown:"SLOW DOWN",ctlTitle:"Controls",ctlDrive:"ZR accelerate \xB7 ZL brake / reverse \xB7 stick or D-pad steer \xB7 B handbrake",ctlAct:"A pick up / drop off / refuel \xB7 Y camera \xB7 \u25B2 \u25BC speed limiter \xB7 + pause",ctlGear:"Manual gearbox: R gear up \xB7 L gear down \xB7 X clutch (hold)",ctlRemote:"TV remote: \u25C0 \u25B6 steer \xB7 \u25B2 accelerate \xB7 \u25BC brake \xB7 OK action \xB7 Back pause",rules:"Rules of the road",rulesText:"Respect the speed limit on the sign, stop at red lights, never drive up a one-way street the wrong way and stay off the pavement: the police fine you. Every accident is assessed: when it is your fault you pay the repairs, the other car and a fine.",stats:"Shift so far",earned:"Earned",fines:"Fines",repairs:"Repairs",fuelSpent:"Fuel",km:"km driven",best:"Best fare",fare:"Fare",camSpeed:"Speed camera: {0}",policeSpeed:"Police check: {0}",seenPolice:"Seen by the police",fine_ped:"Accident: you hit a pedestrian",pedHurt:"Injuries (compensation)",passengerHurt:"Your passenger was hurt (compensation)",pickupTo:"Pick up \xB7 to {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Fare, {0} km",car:"Car",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Start over",resetAsk:"Start over with 300 DH, a quarter tank and a clean record?",yes:"Yes, start over",no:"No",resetDone:"A fresh start: 300 DH",camAhead:"Speed camera",police:"Police",credits:"Streets and buildings \xA9 OpenStreetMap contributors (ODbL). Heights: AWS Terrain Tiles. Models and sounds: Kenney (CC0)."},fr:{tag:"Conduisez dans les vraies rues de Tanger",press:"Appuyez sur OK pour commencer",start:"Commencer le service",settings:"R\xE9glages",help:"Commandes",resume:"Reprendre",quit:"Finir le service",back:"Retour",gearbox:"Bo\xEEte de vitesses",auto:"Automatique",manual:"Manuelle",clutch:"Manuelle + embrayage",limiter:"Limiteur de vitesse",off:"Arr\xEAt",money:"Caisse",rides:"Courses",fuel:"Carburant",paused:"Pause",pickup:"Prendre le client",dropoff:"D\xE9poser le client",refuel:"Faire le plein",stop:"Arr\xEAter le plein",help_:"Appeler le d\xE9pannage",helpWait:"Le d\xE9pannage arrive\u2026",to:"Vers",eta:"Temps restant",late:"En retard",meter:"Compteur",fine_speed:"Amende : exc\xE8s de vitesse",fine_red:"Amende : feu rouge grill\xE9",fine_wrong:"Amende : sens interdit",fine_pave:"Amende : circulation sur le trottoir",rideDone:"Course pay\xE9e",crashYou:"Accident : votre faute",crashThem:"Accident : faute de l'autre conducteur",crashWall:"Accident : choc contre le mur du trottoir",impact:"Choc \xE0 {0} km/h",repairOwn:"R\xE9paration de votre taxi",repairOther:"D\xE9g\xE2ts de l'autre voiture",repairInsured:"R\xE9paration pay\xE9e par l'assurance de l'autre conducteur",fineFault:"Amende : d\xE9faut de ma\xEEtrise",passengerLeft:"Le client est descendu sans payer",helpDone:"D\xE9pannage",helpService:"D\xE9placement",helpFuel:"6 L de gasoil",refuelDone:"Plein fait",litres:"{0} L de gasoil",tip:"Pourboire",bumps:"Chocs pendant la course ({0})",lateBy:"Retard de {0} s",meterKm:"Compteur, {0} km",outOfFuel:"Panne s\xE8che ! Appuyez sur A pour appeler le d\xE9pannage.",lowFuel:"R\xE9serve : trouvez une station (vert sur la carte).",helpComing:"Le d\xE9pannage arrive",boarded:"Client \xE0 bord : suivez l'itin\xE9raire vert",noDest:"Le client a chang\xE9 d'avis",needClutch:"Appuyez sur l'embrayage (X) pour changer de vitesse",stalled:"Cal\xE9 : appuyez \xE0 fond sur l'embrayage pour red\xE9marrer",limit:"Limite",total:"Total",wrongWay:"SENS INTERDIT",slowDown:"RALENTISSEZ",ctlTitle:"Commandes",ctlDrive:"ZR acc\xE9l\xE9rer \xB7 ZL freiner / reculer \xB7 stick ou croix diriger \xB7 B frein \xE0 main",ctlAct:"A prendre / d\xE9poser / plein \xB7 Y cam\xE9ra \xB7 \u25B2 \u25BC limiteur \xB7 + pause",ctlGear:"Bo\xEEte manuelle : R monter \xB7 L descendre \xB7 X embrayage (maintenir)",ctlRemote:"T\xE9l\xE9commande : \u25C0 \u25B6 diriger \xB7 \u25B2 acc\xE9l\xE9rer \xB7 \u25BC freiner \xB7 OK action \xB7 Retour pause",rules:"Code de la route",rulesText:"Respectez la limite du panneau, arr\xEAtez-vous au feu rouge, ne prenez jamais un sens interdit et ne roulez pas sur le trottoir : la police verbalise. Chaque accident est expertis\xE9 : si c'est votre faute, vous payez les r\xE9parations, l'autre voiture et une amende.",stats:"Service en cours",earned:"Gagn\xE9",fines:"Amendes",repairs:"R\xE9parations",fuelSpent:"Carburant",km:"km parcourus",best:"Meilleure course",fare:"Course",camSpeed:"Radar : {0}",policeSpeed:"Contr\xF4le de police : {0}",seenPolice:"Vu par la police",fine_ped:"Accident : vous avez renvers\xE9 un pi\xE9ton",pedHurt:"Blessures (indemnisation)",passengerHurt:"Votre client a \xE9t\xE9 bless\xE9 (indemnisation)",pickupTo:"Prendre \xB7 vers {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Course, {0} km",car:"Voiture",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Recommencer",resetAsk:"Recommencer avec 300 DH, un quart de r\xE9servoir et un dossier vierge ?",yes:"Oui, recommencer",no:"Non",resetDone:"Nouveau d\xE9part : 300 DH",camAhead:"Radar",police:"Police",credits:"Rues et b\xE2timents \xA9 contributeurs OpenStreetMap (ODbL). Relief : AWS Terrain Tiles. Mod\xE8les et sons : Kenney (CC0)."},es:{tag:"Conduce por las calles reales de T\xE1nger",press:"Pulsa OK para empezar",start:"Empezar el turno",settings:"Ajustes",help:"Controles",resume:"Seguir",quit:"Terminar el turno",back:"Volver",gearbox:"Caja de cambios",auto:"Autom\xE1tica",manual:"Manual",clutch:"Manual + embrague",limiter:"Limitador de velocidad",off:"No",money:"Caja",rides:"Carreras",fuel:"Combustible",paused:"Pausa",pickup:"Recoger al pasajero",dropoff:"Dejar al pasajero",refuel:"Repostar",stop:"Dejar de repostar",help_:"Llamar a la gr\xFAa",helpWait:"La ayuda est\xE1 en camino\u2026",to:"Hacia",eta:"Tiempo",late:"Tarde",meter:"Tax\xEDmetro",fine_speed:"Multa: exceso de velocidad",fine_red:"Multa: sem\xE1foro en rojo",fine_wrong:"Multa: sentido contrario",fine_pave:"Multa: circular por la acera",rideDone:"Carrera pagada",crashYou:"Accidente: culpa tuya",crashThem:"Accidente: culpa del otro conductor",crashWall:"Accidente: golpe contra el muro",impact:"Choque a {0} km/h",repairOwn:"Reparaci\xF3n de tu taxi",repairOther:"Da\xF1os del otro coche",repairInsured:"Reparaci\xF3n pagada por el seguro del otro conductor",fineFault:"Multa: p\xE9rdida de control",passengerLeft:"El pasajero se baj\xF3 sin pagar",helpDone:"Asistencia en carretera",helpService:"Desplazamiento",helpFuel:"6 L de gas\xF3leo",refuelDone:"Dep\xF3sito lleno",litres:"{0} L de gas\xF3leo",tip:"Propina",bumps:"Golpes en el viaje ({0})",lateBy:"{0} s de retraso",meterKm:"Tax\xEDmetro, {0} km",outOfFuel:"\xA1Sin combustible! Pulsa A para llamar a la asistencia.",lowFuel:"Reserva: busca una gasolinera (verde en el mapa).",helpComing:"La ayuda viene",boarded:"Pasajero a bordo: sigue la ruta verde",noDest:"El pasajero cambi\xF3 de idea",needClutch:"Pisa el embrague (X) para cambiar de marcha",stalled:"Calado: pisa el embrague a fondo para arrancar",limit:"L\xEDmite",total:"Total",wrongWay:"SENTIDO CONTRARIO",slowDown:"FRENA",ctlTitle:"Controles",ctlDrive:"ZR acelerar \xB7 ZL frenar / marcha atr\xE1s \xB7 stick o cruceta girar \xB7 B freno de mano",ctlAct:"A recoger / dejar / repostar \xB7 Y c\xE1mara \xB7 \u25B2 \u25BC limitador \xB7 + pausa",ctlGear:"Cambio manual: R subir \xB7 L bajar \xB7 X embrague (mantener)",ctlRemote:"Mando de la tele: \u25C0 \u25B6 girar \xB7 \u25B2 acelerar \xB7 \u25BC frenar \xB7 OK acci\xF3n \xB7 Atr\xE1s pausa",rules:"Normas de tr\xE1fico",rulesText:"Respeta el l\xEDmite de la se\xF1al, para en rojo, nunca entres en direcci\xF3n prohibida y no circules por la acera: la polic\xEDa multa. Cada accidente se peritan: si es culpa tuya pagas las reparaciones, el otro coche y una multa.",stats:"Turno actual",earned:"Ganado",fines:"Multas",repairs:"Reparaciones",fuelSpent:"Combustible",km:"km recorridos",best:"Mejor carrera",fare:"Tarifa",camSpeed:"Radar: {0}",policeSpeed:"Control policial: {0}",seenPolice:"Visto por la polic\xEDa",fine_ped:"Accidente: atropellaste a un peat\xF3n",pedHurt:"Heridas (indemnizaci\xF3n)",passengerHurt:"Tu pasajero result\xF3 herido (indemnizaci\xF3n)",pickupTo:"Recoger \xB7 a {0} \xB7 {1} km \xB7 {2} DH",fareKm:"Carrera, {0} km",car:"Coche",car_taxi:"Petit taxi",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"Empezar de nuevo",resetAsk:"\xBFEmpezar de nuevo con 300 DH, un cuarto de dep\xF3sito y el historial limpio?",yes:"S\xED, empezar de nuevo",no:"No",resetDone:"Nuevo comienzo: 300 DH",camAhead:"Radar",police:"Polic\xEDa",credits:"Calles y edificios \xA9 colaboradores de OpenStreetMap (ODbL). Relieve: AWS Terrain Tiles. Modelos y sonidos: Kenney (CC0)."},ar:{tag:"\u0642\u064F\u062F \u0641\u064A \u0634\u0648\u0627\u0631\u0639 \u0637\u0646\u062C\u0629 \u0627\u0644\u062D\u0642\u064A\u0642\u064A\u0629",press:"\u0627\u0636\u063A\u0637 OK \u0644\u0644\u0628\u062F\u0621",start:"\u0627\u0628\u062F\u0623 \u0627\u0644\u0639\u0645\u0644",settings:"\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A",help:"\u0627\u0644\u062A\u062D\u0643\u0645",resume:"\u0645\u062A\u0627\u0628\u0639\u0629",quit:"\u0625\u0646\u0647\u0627\u0621 \u0627\u0644\u0639\u0645\u0644",back:"\u0631\u062C\u0648\u0639",gearbox:"\u0639\u0644\u0628\u0629 \u0627\u0644\u0633\u0631\u0639\u0627\u062A",auto:"\u0623\u0648\u062A\u0648\u0645\u0627\u062A\u064A\u0643",manual:"\u064A\u062F\u0648\u064A",clutch:"\u064A\u062F\u0648\u064A + \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636",limiter:"\u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629",off:"\u0645\u062A\u0648\u0642\u0641",money:"\u0627\u0644\u0635\u0646\u062F\u0648\u0642",rides:"\u0627\u0644\u0631\u062D\u0644\u0627\u062A",fuel:"\u0627\u0644\u0648\u0642\u0648\u062F",paused:"\u0625\u064A\u0642\u0627\u0641 \u0645\u0624\u0642\u062A",pickup:"\u0623\u0631\u0643\u0628 \u0627\u0644\u0632\u0628\u0648\u0646",dropoff:"\u0623\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646",refuel:"\u0627\u0645\u0644\u0623 \u0627\u0644\u062E\u0632\u0627\u0646",stop:"\u0623\u0648\u0642\u0641 \u0627\u0644\u062A\u0639\u0628\u0626\u0629",help_:"\u0627\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629",helpWait:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0641\u064A \u0627\u0644\u0637\u0631\u064A\u0642\u2026",to:"\u0625\u0644\u0649",eta:"\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u062A\u0628\u0642\u064A",late:"\u0645\u062A\u0623\u062E\u0631",meter:"\u0627\u0644\u0639\u062F\u0627\u062F",fine_speed:"\u0645\u062E\u0627\u0644\u0641\u0629: \u062A\u062C\u0627\u0648\u0632 \u0627\u0644\u0633\u0631\u0639\u0629",fine_red:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631",fine_wrong:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0645\u0645\u0646\u0648\u0639",fine_pave:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0627\u0644\u0633\u064A\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641",rideDone:"\u062F\u064F\u0641\u0639\u062A \u0627\u0644\u0631\u062D\u0644\u0629",crashYou:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0624\u0643",crashThem:"\u062D\u0627\u062F\u062B: \u062E\u0637\u0623 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",crashWall:"\u062D\u0627\u062F\u062B: \u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u062D\u0627\u0641\u0629 \u0627\u0644\u0631\u0635\u064A\u0641",impact:"\u0627\u0635\u0637\u062F\u0627\u0645 \u0628\u0633\u0631\u0639\u0629 {0} \u0643\u0645/\u0633",repairOwn:"\u0625\u0635\u0644\u0627\u062D \u0633\u064A\u0627\u0631\u062A\u0643",repairOther:"\u0623\u0636\u0631\u0627\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649",repairInsured:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0639\u0644\u0649 \u062A\u0623\u0645\u064A\u0646 \u0627\u0644\u0633\u0627\u0626\u0642 \u0627\u0644\u0622\u062E\u0631",fineFault:"\u0645\u062E\u0627\u0644\u0641\u0629: \u0639\u062F\u0645 \u0627\u0644\u062A\u062D\u0643\u0645",passengerLeft:"\u0646\u0632\u0644 \u0627\u0644\u0632\u0628\u0648\u0646 \u062F\u0648\u0646 \u0623\u0646 \u064A\u062F\u0641\u0639",helpDone:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0639\u0644\u0649 \u0627\u0644\u0637\u0631\u064A\u0642",helpService:"\u0627\u0644\u062A\u0646\u0642\u0644",helpFuel:"6 \u0644\u062A\u0631\u0627\u062A \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",refuelDone:"\u062A\u0645\u062A \u0627\u0644\u062A\u0639\u0628\u0626\u0629",litres:"{0} \u0644\u062A\u0631 \u0645\u0646 \u0627\u0644\u062F\u064A\u0632\u0644",tip:"\u0628\u0642\u0634\u064A\u0634",bumps:"\u0635\u062F\u0645\u0627\u062A \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0631\u062D\u0644\u0629 ({0})",lateBy:"\u062A\u0623\u062E\u0631 {0} \u062B",meterKm:"\u0627\u0644\u0639\u062F\u0627\u062F\u060C {0} \u0643\u0645",outOfFuel:"\u0646\u0641\u062F \u0627\u0644\u0648\u0642\u0648\u062F! \u0627\u0636\u063A\u0637 A \u0644\u0637\u0644\u0628 \u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629.",lowFuel:"\u0627\u0644\u0648\u0642\u0648\u062F \u0645\u0646\u062E\u0641\u0636: \u0627\u0628\u062D\u062B \u0639\u0646 \u0645\u062D\u0637\u0629 (\u0628\u0627\u0644\u0623\u062E\u0636\u0631 \u0639\u0644\u0649 \u0627\u0644\u062E\u0631\u064A\u0637\u0629).",helpComing:"\u0627\u0644\u0645\u0633\u0627\u0639\u062F\u0629 \u0642\u0627\u062F\u0645\u0629",boarded:"\u0627\u0644\u0632\u0628\u0648\u0646 \u0641\u064A \u0627\u0644\u0633\u064A\u0627\u0631\u0629: \u0627\u062A\u0628\u0639 \u0627\u0644\u0637\u0631\u064A\u0642 \u0627\u0644\u0623\u062E\u0636\u0631",noDest:"\u063A\u064A\u0651\u0631 \u0627\u0644\u0632\u0628\u0648\u0646 \u0631\u0623\u064A\u0647",needClutch:"\u0627\u0636\u063A\u0637 \u062F\u0648\u0627\u0633\u0629 \u0627\u0644\u0642\u0627\u0628\u0636 (X) \u0644\u062A\u063A\u064A\u064A\u0631 \u0627\u0644\u0633\u0631\u0639\u0629",stalled:"\u062A\u0648\u0642\u0641 \u0627\u0644\u0645\u062D\u0631\u0643: \u0627\u0636\u063A\u0637 \u0627\u0644\u0642\u0627\u0628\u0636 \u0643\u0627\u0645\u0644\u0627\u064B \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u062A\u0634\u063A\u064A\u0644",limit:"\u0627\u0644\u062D\u062F",total:"\u0627\u0644\u0645\u062C\u0645\u0648\u0639",wrongWay:"\u0627\u062A\u062C\u0627\u0647 \u0645\u0645\u0646\u0648\u0639",slowDown:"\u062E\u0641\u0641 \u0627\u0644\u0633\u0631\u0639\u0629",ctlTitle:"\u0627\u0644\u062A\u062D\u0643\u0645",ctlDrive:"ZR \u062A\u0633\u0627\u0631\u0639 \xB7 ZL \u0641\u0631\u0627\u0645\u0644 / \u0631\u062C\u0648\u0639 \xB7 \u0627\u0644\u0639\u0635\u0627 \u0623\u0648 \u0627\u0644\u0623\u0633\u0647\u0645 \u0644\u0644\u062A\u0648\u062C\u064A\u0647 \xB7 B \u0641\u0631\u0627\u0645\u0644 \u0627\u0644\u064A\u062F",ctlAct:"A \u0625\u0631\u0643\u0627\u0628 / \u0625\u0646\u0632\u0627\u0644 / \u062A\u0639\u0628\u0626\u0629 \xB7 Y \u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \xB7 \u25B2 \u25BC \u0645\u062D\u062F\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 + \u0625\u064A\u0642\u0627\u0641",ctlGear:"\u0639\u0644\u0628\u0629 \u064A\u062F\u0648\u064A\u0629: R \u0631\u0641\u0639 \u0627\u0644\u0633\u0631\u0639\u0629 \xB7 L \u062E\u0641\u0636\u0647\u0627 \xB7 X \u0627\u0644\u0642\u0627\u0628\u0636 (\u0627\u0636\u063A\u0637 \u0645\u0637\u0648\u0644\u0627\u064B)",ctlRemote:"\u062C\u0647\u0627\u0632 \u0627\u0644\u062A\u062D\u0643\u0645: \u25C0 \u25B6 \u062A\u0648\u062C\u064A\u0647 \xB7 \u25B2 \u062A\u0633\u0627\u0631\u0639 \xB7 \u25BC \u0641\u0631\u0627\u0645\u0644 \xB7 OK \u0625\u062C\u0631\u0627\u0621 \xB7 \u0631\u062C\u0648\u0639 \u0625\u064A\u0642\u0627\u0641",rules:"\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0633\u064A\u0631",rulesText:"\u0627\u062D\u062A\u0631\u0645 \u062D\u062F \u0627\u0644\u0633\u0631\u0639\u0629 \u0641\u064A \u0627\u0644\u0644\u0648\u062D\u0629\u060C \u0648\u062A\u0648\u0642\u0641 \u0639\u0646\u062F \u0627\u0644\u0636\u0648\u0621 \u0627\u0644\u0623\u062D\u0645\u0631\u060C \u0648\u0644\u0627 \u062A\u062F\u062E\u0644 \u0634\u0627\u0631\u0639\u0627\u064B \u0645\u0645\u0646\u0648\u0639\u0627\u064B\u060C \u0648\u0644\u0627 \u062A\u0633\u0650\u0631 \u0639\u0644\u0649 \u0627\u0644\u0631\u0635\u064A\u0641: \u0627\u0644\u0634\u0631\u0637\u0629 \u062A\u062D\u0631\u0631 \u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A. \u0643\u0644 \u062D\u0627\u062F\u062B \u064A\u064F\u0642\u064A\u064E\u0651\u0645: \u0625\u0630\u0627 \u0643\u0627\u0646 \u062E\u0637\u0623\u0643 \u062A\u062F\u0641\u0639 \u0627\u0644\u0625\u0635\u0644\u0627\u062D \u0648\u0627\u0644\u0633\u064A\u0627\u0631\u0629 \u0627\u0644\u0623\u062E\u0631\u0649 \u0648\u0645\u062E\u0627\u0644\u0641\u0629.",stats:"\u062D\u0635\u064A\u0644\u0629 \u0627\u0644\u0639\u0645\u0644",earned:"\u0627\u0644\u0645\u062F\u0627\u062E\u064A\u0644",fines:"\u0627\u0644\u0645\u062E\u0627\u0644\u0641\u0627\u062A",repairs:"\u0627\u0644\u0625\u0635\u0644\u0627\u062D\u0627\u062A",fuelSpent:"\u0627\u0644\u0648\u0642\u0648\u062F",km:"\u0643\u0645 \u0645\u0642\u0637\u0648\u0639\u0629",best:"\u0623\u0641\u0636\u0644 \u0631\u062D\u0644\u0629",fare:"\u0627\u0644\u0623\u062C\u0631\u0629",camSpeed:"\u0631\u0627\u062F\u0627\u0631: {0}",policeSpeed:"\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0634\u0631\u0637\u0629: {0}",seenPolice:"\u0631\u0635\u062F\u062A\u0643 \u0627\u0644\u0634\u0631\u0637\u0629",fine_ped:"\u062D\u0627\u062F\u062B\u0629: \u0635\u062F\u0645\u062A \u0631\u0627\u062C\u0644\u0627\u064B",pedHurt:"\u0625\u0635\u0627\u0628\u0627\u062A (\u062A\u0639\u0648\u064A\u0636)",passengerHurt:"\u0623\u0635\u064A\u0628 \u0632\u0628\u0648\u0646\u0643 (\u062A\u0639\u0648\u064A\u0636)",pickupTo:"\u0623\u0631\u0643\u0628 \xB7 \u0625\u0644\u0649 {0} \xB7 {1} \u0643\u0644\u0645 \xB7 {2} \u062F\u0631\u0647\u0645",fareKm:"\u0627\u0644\u0623\u062C\u0631\u0629\u060C {0} \u0643\u0644\u0645",car:"\u0627\u0644\u0633\u064A\u0627\u0631\u0629",car_taxi:"\u0637\u0627\u0643\u0633\u064A \u0635\u063A\u064A\u0631",car_city:"Kasbah City",car_hatch:"Medina Hatch",reset:"\u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",resetAsk:"\u0627\u0644\u0628\u062F\u0621 \u0645\u0646 \u062C\u062F\u064A\u062F \u0628\u0640 300 \u062F\u0631\u0647\u0645 \u0648\u0631\u0628\u0639 \u062E\u0632\u0627\u0646 \u0648\u0633\u062C\u0644 \u0646\u0638\u064A\u0641\u061F",yes:"\u0646\u0639\u0645\u060C \u0627\u0628\u062F\u0623 \u0645\u0646 \u062C\u062F\u064A\u062F",no:"\u0644\u0627",resetDone:"\u0628\u062F\u0627\u064A\u0629 \u062C\u062F\u064A\u062F\u0629: 300 \u062F\u0631\u0647\u0645",camAhead:"\u0631\u0627\u062F\u0627\u0631",police:"\u0627\u0644\u0634\u0631\u0637\u0629",credits:"\u0627\u0644\u0634\u0648\u0627\u0631\u0639 \u0648\u0627\u0644\u0645\u0628\u0627\u0646\u064A \xA9 \u0645\u0633\u0627\u0647\u0645\u0648 OpenStreetMap (ODbL). \u0627\u0644\u062A\u0636\u0627\u0631\u064A\u0633: AWS Terrain Tiles. \u0627\u0644\u0646\u0645\u0627\u0630\u062C \u0648\u0627\u0644\u0623\u0635\u0648\u0627\u062A: Kenney (CC0)."}},wt={lang:"en",set(s){this.lang=pa[s]?s:"en",document.documentElement.lang=this.lang,document.documentElement.dir=this.lang==="ar"?"rtl":"ltr"},t(s,...t){let e=pa[this.lang]&&pa[this.lang][s]||pa.en[s]||s;return t.forEach((n,i)=>{e=e.replace("{"+i+"}",n)}),e},line(s){let t=s.indexOf(":");return t<0?this.t(s):this.t(s.slice(0,t),s.slice(t+1))}};var Vl=["auto","manual","clutch"],Gl=["taxi","city","hatch"],ma=class{constructor(t,e){this.app=t,this.root=e,this.items=[],this.f=0,this.back=null,this.screen=""}show(t,e,n,i){this.root.innerHTML=t,this.root.style.display="block",this.items=[...this.root.querySelectorAll("[data-f]")],this.acts=e,this.back=n,this.f=Math.min(i||0,this.items.length-1),this.paint()}hide(){this.root.style.display="none",this.root.innerHTML="",this.items=[],this.screen=""}get open(){return this.root.style.display==="block"}paint(){this.items.forEach((t,e)=>t.classList.toggle("focus",e===this.f))}input(t,e,n){if(!this.open)return!1;if(t==="up"||t==="left")this.f=(this.f+this.items.length-1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="down"||t==="right")this.f=(this.f+1)%this.items.length,this.paint(),this.app.sound.ui("move");else if(t==="confirm"&&!n){let i=this.acts[this.f];this.app.sound.ui("ok"),i&&i()}else if((t==="cancel"||t==="menu")&&!n)if(this.back)this.app.sound.ui("back"),this.back();else return!1;return!0}gearLabel(){return wt.t(this.app.settings.gearbox==="auto"?"auto":this.app.settings.gearbox)}title(){this.screen="title";let t=this.app.saved&&this.app.saved.stats;this.show(`<div class="title"><div class="logo"><span class="l1">TANGIER</span><span class="l2">TAXI</span></div>
<div class="tag">${wt.t("tag")}</div>
<div class="menu"><div class="btn go" data-f>${wt.t("start")}</div><div class="btn" data-f>${wt.t("car")}: <b>${this.carLabel()}</b></div><div class="btn" data-f>${wt.t("gearbox")}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${wt.t("help")}</div>${t?`<div class="btn" data-f>${wt.t("reset")}</div>`:""}</div>
${t?`<div class="mini">${wt.t("money")} <b>${Math.round(this.app.saved.money)} DH</b> \xB7 ${wt.t("rides")} <b>${t.rides}</b> \xB7 ${t.km.toFixed(0)} ${wt.t("km")}</div>`:""}
<div class="foot">${wt.t("credits")}</div></div>`,[()=>this.app.startShift(),()=>this.cycleCar(()=>this.title(),1),()=>this.cycleGear(()=>this.title(),2),()=>this.controls(()=>this.title()),()=>this.confirmReset(()=>{this.app.resetCareer(),this.title()},()=>{this.title(),this.f=4,this.paint()})],null)}carLabel(){return wt.t("car_"+(this.app.settings.car||"taxi"))}cycleCar(t,e){let n=this.app.settings;n.car=Gl[(Gl.indexOf(n.car)+1)%Gl.length],this.app.saveSettings(),t(),this.f=e,this.paint()}confirmReset(t,e){this.show(`<div class="panel pause"><h2>${wt.t("reset")}</h2><p>${wt.t("resetAsk")}</p><div class="btn" data-f>${wt.t("no")}</div><div class="btn" data-f>${wt.t("yes")}</div></div>`,[e,t],e,0)}cycleGear(t,e){let n=this.app.settings;n.gearbox=Vl[(Vl.indexOf(n.gearbox)+1)%Vl.length],this.app.saveSettings(),this.app.shift&&this.app.applyGear(),t(),this.f=e,this.paint()}controls(t){this.show(`<div class="panel"><h2>${wt.t("ctlTitle")}</h2><p>${wt.t("ctlDrive")}</p><p>${wt.t("ctlAct")}</p><p>${wt.t("ctlGear")}</p><p>${wt.t("ctlRemote")}</p>
<h3>${wt.t("rules")}</h3><p class="small">${wt.t("rulesText")}</p><div class="btn" data-f>${wt.t("back")}</div></div>`,[t],t)}pause(){this.screen="pause";let t=this.app.shift.taxi,e=t.stats,n=(i,r)=>`<div class="st"><span>${wt.t(i)}</span><b>${r}</b></div>`;this.show(`<div class="panel pause"><h2>${wt.t("paused")}</h2>
<div class="stats">${n("money",Math.round(t.money)+" DH")}${n("rides",e.rides)}${n("earned",Math.round(e.earned)+" DH")}${n("fines",Math.round(e.fines)+" DH")}${n("repairs",Math.round(e.repairs)+" DH")}${n("fuelSpent",Math.round(e.fuel)+" DH")}${n("km",e.km.toFixed(1))}</div>
<div class="btn go" data-f>${wt.t("resume")}</div><div class="btn" data-f>${wt.t("car")}: <b>${this.carLabel()}</b></div><div class="btn" data-f>${wt.t("gearbox")}: <b>${this.gearLabel()}</b></div><div class="btn" data-f>${wt.t("limiter")}: <b>${t.limiter?t.limiter+" km/h":wt.t("off")}</b></div><div class="btn" data-f>${wt.t("help")}</div><div class="btn" data-f>${wt.t("reset")}</div><div class="btn" data-f>${wt.t("quit")}</div></div>`,[()=>this.app.resumeShift(),()=>{this.cycleCar(()=>{},1),this.app.startShift()},()=>this.cycleGear(()=>this.pause(),2),()=>{t.limiter=t.limiter?0:50,this.pause(),this.f=3,this.paint()},()=>this.controls(()=>this.pause()),()=>this.confirmReset(()=>this.app.resetCareer(),()=>{this.pause(),this.f=5,this.paint()}),()=>this.app.endShift()],()=>this.app.resumeShift())}};var ve=5,Kt=(s,t,e)=>{let n=document.createElement(e||"div");return n.className=s,t&&t.appendChild(n),n},Wl=s=>(s<0?"\u2212":"")+Math.abs(Math.round(s)).toLocaleString("en-US")+" DH",ga=class{constructor(t){this.root=t,this.box=null}begin(t,e){this.shift=t,this.label=e;let n=this.root;n.innerHTML="",n.style.display="block",this.cash=Kt("h-cash",n),this.cashV=Kt("v",this.cash),this.rides=Kt("s",this.cash),this.sign=Kt("h-sign",n),this.signV=Kt("n",this.sign),this.street=Kt("h-street",n),this.warn=Kt("h-warn",n),this.area=Kt("h-area",n);let i=Kt("h-map",n);this.mapC=Kt("",i,"canvas"),this.mapC.width=this.mapC.height=260,this.mapX=this.mapC.getContext("2d"),this.dash=Kt("h-dash",n),this.spd=Kt("spd",this.dash),this.unit=Kt("unit",this.dash),this.unit.textContent="km/h",this.gear=Kt("gear",this.dash),this.rpm=Kt("rpm",this.dash),this.rpmB=Kt("b",this.rpm),this.fuelW=Kt("fuel",this.dash),this.fuelB=Kt("b",this.fuelW),this.fuelT=Kt("t",this.dash),this.lim=Kt("lim",this.dash),this.ride=Kt("h-ride",n),this.prompt=Kt("h-prompt",n),this.cards=Kt("h-cards",n),this.toastE=Kt("h-toast",n),this.cache={},this.t=0,this.toastT=0,this.drawBase(t.net)}set(t,e,n){this.cache[e]!==n&&(this.cache[e]=n,t.textContent=n)}drawBase(t){let e=t.box,n=Math.ceil((e.x1-e.x0)/ve),i=Math.ceil((e.z1-e.z0)/ve),r=document.createElement("canvas");r.width=n,r.height=i;let a=r.getContext("2d");a.fillStyle="#16202c",a.fillRect(0,0,n,i);let o=t.g;a.fillStyle="#0d2a44";for(let l=0;l<o.nz;l+=2)for(let c=0;c<o.nx;c+=2)o.h[l*o.nx+c]<-20&&a.fillRect((o.x0+c*o.c-e.x0)/ve-3,(o.z0+l*o.c-e.z0)/ve-3,6,6);a.lineCap="round",a.lineJoin="round";for(let l of[0,1])for(let c=0;c<t.ne;c++){let h=t.eCls[c];if(l===0!=h>=4)continue;a.strokeStyle=h<=1?"#e8c35a":h<=3?"#c9d2dc":"#6d7b8b",a.lineWidth=h<=1?3:h<=3?2.2:1.3,a.beginPath();let u=t.eOff[c],f=t.eN[c];for(let m=0;m<f;m++){let d=(t.px[u+m]-e.x0)/ve,x=(t.pz[u+m]-e.z0)/ve;m?a.lineTo(d,x):a.moveTo(d,x)}a.stroke()}this.base=r}update(t,e){let n=this.shift,i=n.me.veh,r=n.taxi;for(this.t+=t;r.events.length;){let g=r.events.shift();this.card(g),r.log.push(g),r.log.length>20&&r.log.shift()}for(;r.toasts.length;){let g=r.toasts.shift();this.toastE.textContent=wt.t(g.text),this.toastE.className="h-toast on "+g.kind,this.toastT=3.2}this.toastT>0&&(this.toastT-=t)<=0&&(this.toastE.className="h-toast");for(let g of this.cards.children)g._t-=t,g._t<=0&&!g._gone&&(g._gone=!0,g.classList.add("out"),setTimeout(()=>g.remove(),400));if(this.t<.08)return;let a=this.t;this.t=0;let o=Math.round(Math.abs(i.fwdSpeed)*3.6);this.set(this.cashV,"cash",Wl(r.money)),this.cashV.className="v"+(r.money<0?" neg":""),this.set(this.rides,"rides",wt.t("rides")+" "+r.stats.rides);let l=n.qp,c=l.edge>=0?l.lim:0;this.set(this.signV,"lim",c?String(c):""),this.sign.style.display=c?"":"none",this.set(this.street,"street",l.edge>=0?n.net.edgeName(l.edge,wt.lang):""),(this.areaT=(this.areaT||0)-a)<=0&&(this.areaT=.5,this.set(this.area,"area",n.net.areaName(i.px,i.pz,wt.lang)));let h=r.wrongNow?wt.t("wrongWay"):r.speeding?wt.t("slowDown"):i.stalled?wt.t("stalled"):"";this.set(this.warn,"warn",h),this.warn.className="h-warn"+(h?" on":""),this.set(this.spd,"spd",String(o)),this.spd.className="spd"+(c&&o>c+5?" over":"");let u=i.gearbox?i.mgear<0?"R":i.mgear===0?"N":String(i.mgear):i.reverse?"R":"D"+i.gear;this.set(this.gear,"gear",u),this.rpmB.style.transform="scaleX("+Math.min(1,i.rpm/i.spec.rpm).toFixed(3)+")",this.rpmB.className="b"+(i.rpm>i.spec.rpm*.92?" red":""),this.fuelB.style.transform="scaleX("+Math.max(0,r.fuel/r.tank).toFixed(3)+")",this.fuelB.className="b"+(r.fuel<4?" low":""),this.set(this.fuelT,"fuel","\u26FD "+r.fuel.toFixed(1)+" L"),this.set(this.lim,"limiter",r.limiter?"\u2298 "+r.limiter:"");let f=r.ride;if(f&&f.ped.state==="in"){let g=Math.max(0,f.eta-f.t),p=f.route?f.route.len:0,w=wt.t("to")+" "+(f.name||"\u2014")+`
`+(p/1e3).toFixed(1)+" km \xB7 "+(g>0?wt.t("eta")+" "+Math.floor(g/60)+":"+String(Math.floor(g%60)).padStart(2,"0"):wt.t("late"))+`
`+wt.t("fare")+" "+r.meter()+" DH";this.set(this.ride,"ride",w),this.ride.className="h-ride on"+(g<=0?" late":"")}else this.set(this.ride,"ride",""),this.ride.className="h-ride";let m=r.prompt,d=m==="help"?"help_":m,x="";if(m==="helpWait")x=wt.t("helpWait");else if(m==="pickup"){let g=r.nearPed(i),p=g&&g.quote;x=this.label()+"  "+(p?wt.t("pickupTo",p.name||"\u2014",p.km.toFixed(1),p.fare):wt.t("pickup"))}else m&&(x=this.label()+"  "+wt.t(d)+(m==="refuel"?"  ("+13.4+" DH/L)":""));this.set(this.prompt,"prompt",x),this.prompt.className="h-prompt"+(x?" on":""),this.map(n,i,r,a)}map(t,e,n){let i=this.mapX,r=260,a=t.net,o=a.box,l=Math.atan2(e.R[6],e.R[8]),c=1.25;i.save(),i.fillStyle="#16202c",i.fillRect(0,0,r,r),i.translate(r/2,r*.62),i.rotate(Math.PI+l),i.scale(c,c);let h=(e.px-o.x0)/ve,u=(e.pz-o.z0)/ve;i.drawImage(this.base,-h,-u);let f=n.ride;if(f&&f.route&&f.ped.state==="in"){i.strokeStyle="#2cff8f",i.lineWidth=3.2/c,i.beginPath();let d=f.route.edges,x=t.qp.edge===(d[0]&&d[0][0])?t.qp.s:-1;i.moveTo(0,0);let g=0;for(let _=0;_<d.length;_++){let v=d[_][0],R=d[_][1],T=a.eOff[v],b=a.eN[v];for(let P=0;P<b;P++){let M=T+(R>0?P:b-1-P),y=a.sS[M];if(!(_===0&&x>=0&&(R>0?y<x:y>x))&&(_===d.length-1&&v===f.e&&(R>0?y>f.s:y<f.s)||(i.lineTo((a.px[M]-e.px)/ve,(a.pz[M]-e.pz)/ve),++g>2e3)))break}}let p=(f.x-e.px)/ve,w=(f.z-e.pz)/ve;i.lineTo(p,w),i.stroke(),i.fillStyle="#2cff8f",i.beginPath(),i.arc(p,w,5/c,0,7),i.fill()}i.fillStyle="#ffd400";for(let d of n.peds)d.state==="wait"&&(i.beginPath(),i.arc((d.x-e.px)/ve,(d.z-e.pz)/ve,3.6/c,0,7),i.fill());let m=t.enforce;if(m){i.fillStyle="#ff4b3e";for(let d of m.cams){let x=(d.x-e.px)/ve,g=(d.z-e.pz)/ve;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.4/c,0,7),i.fill())}i.fillStyle="#3d7bff";for(let d of m.police){let x=(d.x-e.px)/ve,g=(d.z-e.pz)/ve;x*x+g*g<12e3&&(i.beginPath(),i.arc(x,g,3.8/c,0,7),i.fill())}}i.fillStyle="#19d17a";for(let d of a.stations){let x=a.eOff[d.e]+d.k;i.fillRect((a.px[x]-e.px)/ve-4/c,(a.pz[x]-e.pz)/ve-4/c,8/c,8/c)}i.restore(),i.fillStyle="#21c8ef",i.strokeStyle="#fff",i.lineWidth=1.5,i.beginPath(),i.moveTo(r/2,r*.62-9),i.lineTo(r/2+6,r*.62+7),i.lineTo(r/2,r*.62+3),i.lineTo(r/2-6,r*.62+7),i.closePath(),i.fill(),i.stroke()}card(t){let e=Kt("h-card "+t.kind,null);Kt("t",e).textContent=wt.t(t.title);for(let[n,i]of t.lines){let r=Kt("r",e);Kt("l",r,"span").textContent=wt.line(n),Kt("a"+(i<0?" neg":i>0?" pos":""),r,"span").textContent=i?Wl(i):""}if(t.lines.length>1||t.total){let n=Kt("r tot",e);Kt("l",n,"span").textContent=wt.t("total"),Kt("a"+(t.total<0?" neg":" pos"),n,"span").textContent=Wl(t.total)}for(e._t=t.kind==="crash"?7:5.5,this.cards.appendChild(e);this.cards.children.length>3;)this.cards.firstChild.remove();this.onCard&&this.onCard(t)}end(){this.root.innerHTML="",this.root.style.display="none",this.base=null}};var fe=window.MyPC,xa=1/60,G={renderer:null,canvas:null,info:null,quality:null,net:null,input:new da,shift:null,hud:null,ui:null,sound:null,raf:0,last:0,acc:0,state:"boot",paused:!1,saved:null,settings:{gearbox:"auto",car:"taxi"},fpsLog:[],workLog:[],saveT:0};window.TT=G;function Sg(s){let e=new URLSearchParams(location.search).get("q")||s.quality&&s.quality.tier||"mid";return{tier:e,scale:{low:.6,mid:.8,high:1}[e]||.8,minScale:e==="low"?.45:.55}}function wg(){let s=document.getElementById("c"),t=new Dr({canvas:s,antialias:!1,powerPreference:"high-performance",stencil:!1,alpha:!1,preserveDrawingBuffer:/proof/.test(location.search)});return t.setPixelRatio(1),t.outputColorSpace=si,t.toneMapping=mn,G.canvas=s,t}function Os(){let s=G.shift?G.shift.scale:G.quality.scale,t=Math.round(1920*s*Math.min(1,window.innerWidth/1920*1.5)),e=Math.round(t*window.innerHeight/window.innerWidth);G.renderer.setSize(t,e,!1),G.canvas.style.width="100vw",G.canvas.style.height="100vh"}function qh(s){G.raf=requestAnimationFrame(qh);let t=performance.now();G.last||(G.last=s);let e=s-G.last;G.last=s,G.acc+=Math.min(100,e);let n=0;for(;G.acc>=xa*1e3-.5&&n<4;)Eg(xa),G.acc-=xa*1e3,n++;G.acc>xa*2e3&&(G.acc=0),G.shift&&G.state!=="boot"&&G.shift.render(e),G.fpsLog.length<2e4&&(G.fpsLog.push(e),G.workLog.push(performance.now()-t))}function Wh(){G.raf||(G.last=0,G.acc=0,G.raf=requestAnimationFrame(qh))}function Xh(){G.raf&&cancelAnimationFrame(G.raf),G.raf=0}function Eg(s){if(G.input.poll(s),G.state==="drive"&&G.shift){G.shift.update(s,G.input),G.hud.update(s,G.input),G.sound.update(G.shift,s);let t=G.shift.taxi;t.dirty&&(G.saveT-=s)<=0&&(G.saveT=5,t.dirty=!1,va())}}function va(){if(!G.shift)return;let s=G.shift.taxi.save(),t=G.shift.me.veh;s.at={x:Math.round(t.px),z:Math.round(t.pz)},G.saved=s,fe.save("taxi",s)}G.saveSettings=()=>fe.save("settings",G.settings);G.applyGear=()=>{if(!G.shift)return;let s=G.shift.me.veh,t=G.settings.gearbox;s.gearbox=t==="auto"?null:t,s.mgear=1,s.stalled=!1};G.startShift=function(s){G.ui.hide(),G.shift&&(s||va(),G.shift.dispose(),G.shift=null);let t=new fa(G.renderer,G.net,G.quality,{gearbox:G.settings.gearbox,car:G.settings.car,saved:G.saved,start:G.saved&&G.saved.at,lang:wt.lang});t.onScale=()=>Os(),t.onSound=(e,n,i)=>G.sound.event(e,n,i,t),G.shift=t,G.hud.begin(t,()=>G.input.hasPad()&&fe.gamepad&&fe.gamepad.label?"("+fe.gamepad.label(0)+")":"(OK)"),G.sound.resume(),G.sound.begin(t),G.input.clearHeld(),G.state="drive",Os(),fe.announce&&fe.announce(wt.t("boarded").split(":")[0])};G.resetCareer=function(){let s=G.saved&&G.saved.at;if(G.saved=s?{at:s}:null,fe.save("taxi",G.saved),G.shift){let t=G.shift.me.veh;G.saved={at:{x:Math.round(t.px),z:Math.round(t.pz)}},G.shift.taxi.dirty=!1,G.startShift(!0)}};G.pauseShift=function(){G.state==="drive"&&(G.state="pause",G.sound.pause(),G.ui.pause())};G.resumeShift=function(){G.ui.hide(),G.input.clearHeld(),G.input.prev.action=!0,G.state="drive",G.sound.resume()};G.endShift=function(){va(),G.sound.resume(),G.sound.end(),G.hud.end(),G.shift&&(G.shift.dispose(),G.shift=null),G.state="menu",G.saved&&G.saved.stats&&G.saved.stats.earned&&fe.submitScore&&fe.submitScore(Math.round(G.saved.stats.earned),{}),G.ui.title()};fe.init({ownMenu:!0,onInit:async function(s){G.info=s;try{wt.set(s.lang),G.quality=Sg(s),G.renderer=wg(),Os(),window.addEventListener("resize",Os),await Th(t=>fe.progress(t*.6)),G.net=await $r.load(t=>fe.progress(.6+t*.35)),G.saved=fe.load("taxi",null),G.settings=Object.assign({gearbox:"auto",car:"taxi"},fe.load("settings",null)),G.hud=new ga(document.getElementById("hud")),G.sound=new Zr(s.volume||{music:.7,sfx:.8}),G.ui=new ma(G,document.getElementById("ui")),G.input.menuCb=(t,e,n)=>{if(G.state==="drive"){t==="cancel"&&!n&&G.pauseShift();return}G.ui.input(t,e,n)},fe.progress(1),fe.ready()}catch(t){fe.report&&fe.report(t,{where:"init"}),fe.fail(String(t&&t.message||t))}},onStart:function(){G.sound.start(),Wh();let s=new URLSearchParams(location.search);s.has("dev")?(s.get("gear")&&(G.settings.gearbox=s.get("gear")),s.get("car")&&(G.settings.car=s.get("car")),s.has("fresh")&&(G.saved=null),s.has("x")&&(G.saved=Object.assign({},G.saved,{at:{x:+s.get("x"),z:+s.get("z")}})),G.startShift()):(G.state="menu",G.ui.title())},onPause:function(){Xh(),G.sound.pause(),G.paused=!0,G.state==="drive"&&G.pauseShift()},onResume:function(){G.paused=!1,G.input.clearHeld(),G.state!=="pause"&&G.sound.resume(),Wh()},onDestroy:function(){va(),Xh(),window.removeEventListener("resize",Os),G.shift&&G.shift.dispose(),G.sound&&G.sound.close(),G.renderer&&G.renderer.dispose()},onInput:function(s,t,e,n){if(s==="menu"&&t===!1){G.state==="drive"?G.pauseShift():G.state==="pause"&&G.resumeShift();return}if(s==="cancel"&&t&&G.state==="menu"&&G.ui.screen==="title")return!1;G.input.onAction(s,t,e,n)},onVolume:function(s){G.sound&&G.sound.volume(s)}});fe.gamepad&&(fe.gamepad.on("button",(s,t,e,n)=>G.input.onButton(s,t,e,n)),fe.gamepad.on("axes",(s,t)=>G.input.onAxes(s,t)));})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
