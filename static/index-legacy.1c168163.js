!function(){var t=document.createElement("style");t.innerHTML='@import"https://fonts.googleapis.com/css2?family=Anton&family=Kanit:wght@400;500&family=Noto+Sans+TC:wght@400;500;700;900&family=Roboto:wght@300;400;500;700;900&family=Press+Start+2P&display=swap&subset=chinese-traditional,latin-ext,vietnamese";html{box-sizing:border-box;font-size:16px;line-height:1.15;-webkit-text-size-adjust:none}*,*:before,*:after{box-sizing:inherit}body,h1,h2,h3,h4,h5,h6,p,ol,ul{margin:0;padding:0;font-weight:400}ol,ul{list-style:none}img{max-width:100%;height:auto}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;outline:none}*{touch-action:pan-x pan-y}.fade-enter-active,.fade-leave-active{transition:opacity .35s ease}.fade-enter-from,.fade-leave-to{opacity:0}@keyframes spin{0%{transform:rotate(0) scale(1.2)}to{transform:rotate(360deg) scale(1.2)}}@keyframes scaleYIn{0%{transform:translate(-50%,-50%) scaleY(0)}to{transform:translate(-50%,-50%) scaleY(1)}}.scaleY-enter-active{animation:scaleYIn both}@keyframes scaleYOut{0%{transform:translate(-50%,-50%) scaleY(1)}to{transform:translate(-50%,-50%) scaleY(0)}}.scaleY-leave-active{animation:scaleYOut both}.game-wrapper{position:relative;display:inline-block}.game-wrapper #my-game{width:640px;height:640px}.game-wrapper #battle-overlay{position:absolute;top:0;right:0;bottom:0;left:0;opacity:0;background:#000}.game-wrapper #battle-panel{position:absolute;bottom:0;right:0;left:0;height:100px;border-top:4px solid;background:#fff;font-family:"Press Start 2P";display:flex}.game-wrapper #battle-panel .left{display:flex;width:66.67%}.game-wrapper #battle-panel .left>*{display:flex;flex:auto;align-items:center;justify-content:center;cursor:pointer}.game-wrapper #battle-panel .left>*:hover{background:#eee}.game-wrapper #battle-panel .right{width:33.32%;display:flex;align-items:center;justify-content:center;border-left:4px solid}.game-wrapper .battle-lifebar{position:absolute;padding:14px;background:#fff;width:250px;border:4px solid;font-family:"Press Start 2P";text-align:left}.game-wrapper .battle-lifebar__enemy{top:200px;left:20px}.game-wrapper .battle-lifebar__us{top:450px;right:20px}.game-wrapper .battle-lifebar>h4{font-weight:700}.game-wrapper .battle-lifebar>.lifebar-wrapper{position:relative;width:100%;height:4px;background:#ccc;margin-top:10px}.game-wrapper .battle-lifebar>.lifebar-wrapper>.lifebar{position:absolute;width:100%;height:4px;background:green}.view-home{height:100%;box-sizing:border-box}.view-home>.content{position:relative;width:100%;height:100%}.view-home>.content>h2{color:#fff}.view-home>.content>.intro{color:#fff}html{background:#000}#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50}\n',document.head.appendChild(t),System.register(["./vendor-legacy.0aa4b249.js"],(function(){"use strict";var t,e,i,s,a,n,o,r,l,h,d,c,p;return{setters:[function(g){t=g.d,e=g.r,i=g.o,s=g.a,a=g.c,n=g.F,o=g.b,r=g.e,l=g.f,h=g.g,d=g.h,c=g.i,p=g.j}],execute:function(){function g(t){const e=t.length,i=[];for(let s=0;s<e;s++){const e=t[s];Array.isArray(e)?i.push(...g(e)):i.push(e)}return i}class m{constructor(){this.id=Math.random().toString().slice(2),this.label="Composite",this.cidMap={},this.allBodies=[],this.allComposites=[],this.parent=null}get bodies(){return g([...this.allBodies,...this.allComposites])}add(t){const{allComposites:e,allBodies:i}=this,s=t=>{t.parent=this,"Composite"===t.label?e.push(t):i.push(t),t.cid&&(this.cidMap[t.cid]=t)};Array.isArray(t)?t.forEach((t=>s(t))):t&&s(t)}remove(t){let e,i;return e="Composite"===t.label?this.allComposites:this.allBodies,!(!e||(i=e.indexOf(t),!i))&&(e.splice(i,1),!0)}get(t){return this.cidMap[t]||!1}clear(){this.allBodies=[],this.allComposites=[]}draw(t){const{bodies:e}=this,i=e.length;for(let s=0;s<i;s++)e[s].draw(t)}}class u{constructor(t){this.options={gravity:{x:0,y:3},...t},this.renderer=null,this.world=new m,this.timing={lastDelta:0,lastElapsed:0}}clear(){this.timing.lastDelta=0,this.timing.lastElapsed=0}}class w extends class{constructor(t){this.options={fps:60,checkFps:!1,...t},this.fps=this.options.fps,this.fpsInterval=1e3/this.fps,this.frameId=null,this.fpsLast=null,this.active=!1}stop(){window.cancelAnimationFrame(this.frameId),this.fpsLast=null,this.active=!1}run(){this.step()}step(){if(this.frameId=window.requestAnimationFrame(this.step.bind(this)),!this.fpsLast)return this.active=!0,void(this.fpsLast=performance.now());const t=performance.now(),e=t-this.fpsLast,{fpsInterval:i}=this;e>i&&(this.options.checkFps&&console.log(1e3/e),this.fpsLast=t-e%i,this.draw(e))}draw(){}}{constructor(t){super(t),this.engine=null,this.canvas=t.canvas,this.ctx=this.canvas.getContext("2d"),this.pixelRatio={x:1,y:1},this.resizeCallback=null,this.init()}init(){const{canvas:t,options:e}=this;t.width=e.width,t.height=e.height,this.resizeCallback=()=>{const{width:e,height:i}=t.getBoundingClientRect();this.pixelRatio={x:e/t.width,y:i/t.height}},this.resizeCallback(),document.addEventListener("resize",this.resizeCallback)}stop(){super.stop(),document.removeEventListener("resize",this.resizeCallback)}run(t){t.renderer=this,this.engine=t,super.run()}draw(t){const{ctx:e,engine:i,options:s,fpsInterval:a}=this;i.timing.lastDelta=a,i.timing.lastElapsed=t,e.clearRect(0,0,s.width,s.height),e.save(),e.fillStyle=s.background,e.fillRect(0,0,s.width,s.height),e.restore(),i.world.draw(e)}}const f={detect(t,e,i=1){const{position:s,size:a}=t,{position:n,size:o}=e;return s.x<=n.x+o.width*i&&s.x+a.width*i>=n.x&&s.y<=n.y+o.height*i&&s.y+a.height*i>=n.y},detectAt(t,e){const{x:i,y:s}=t,{position:a,size:n}=e;return i>=a.x&&i<=a.x+n.width&&s>=a.y&&s<=a.y+n.height},detectArea(t,e,i=1){const{position:s,size:a}=t,{position:n,size:o}=e;return(Math.min(s.x+a.width*i,n.x+o.width*i)-Math.max(s.x,n.x))*(Math.min(s.y+a.height*i,n.y+o.height*i)-Math.max(s.y,n.y))}};var y=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,343,343,343,343,0,343,343,343,343,0,343,343,343,343,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,343,343,343,343,0,343,343,343,343,0,343,343,343,343,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,343,343,343,343,0,343,343,343,343,0,343,343,343,343,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];const b=-1218,x=-800,v=z([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,0,0,0,0,0,0,0,342,0,0,342,342,0,0,342,342,342,342,342,342,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,342,342,0,0,342,0,0,342,342,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,342,0,342,0,342,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,342,342,342,0,0,0,342,342,342,342,342,0,342,342,342,342,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,342,342,342,342,0,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,342,342,342,342,342,342,342,342,0,342,342,342,342,342,342,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,342,0,0,0,0,0,0,342,0,342,0,0,0,0,0,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,342,0,0,0,0,0,0,342,0,342,0,0,0,0,0,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,342,0,0,0,0,0,0,342,0,342,0,0,0,0,0,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,342,342,342,342,0,0,342,342,0,342,342,342,0,342,342,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,0,0,342,0,0,342,0,0,0,0,0,0,342,342,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,342,0,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,342,342,342,0,0,0,0,342,0,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,342,0,342,0,0,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,342,0,342,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,342,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,342,342,0,0,0,0,342,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,342,342,0,0,342,342,342,0,342,0,342,342,342,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,342,342,0,0,342,342,0,0,0,0,342,342,0,0,0,342,0,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,0,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,342,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,342,342,0,0,0,0,342,0,0,0,0,342,342,342,342,342,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,342,0,0,0,0,0,0,0,0,0,0,0,0],342,40),k=z(y,343,40);function z(t,e,i){const s=[];for(let a=0;a<t.length;a+=i)for(let n=a;n<a+i;n++)if(t[n]===e){const t={position:{x:64*(n-a),y:64*Math.floor(a/i)},size:{width:16,height:16}};t.position.x+=b,t.position.y+=x,s.push(t)}return s}class E extends class{constructor(t,e,i={}){this.options={render:{},...i},this.size=null,this.render={fillStyle:"yellow",...i.render},this.position={x:t,y:e},this.velocity={x:0,y:0}}translate(t){this.position.x+=t.x,this.position.y+=t.y}setPosition(t){this.position.x=t.x,this.position.y=t.y}setVelocity(t){this.velocity.x=t.x,this.velocity.y=t.y}draw(t){}}{constructor(t,e,i,s){super(t,e),this.size={width:i,height:s},this.opacity=1}draw(t){const{position:e,size:i,render:s}=this;t.fillStyle=s.fillStyle,t.fillRect(e.x,e.y,4*i.width,4*i.height)}attack({attack:t,target:e}){const i=gsap.timeline();let s=20,a="#enemy-life";this.isEnemy&&(s=-s,a="#us-life"),i.to(this.position,{x:this.position.x-s,duration:.3}).to(this.position,{x:this.position.x+2*s,y:this.position.y-s,duration:.15,onComplete(){gsap.to(e.position,{x:e.position.x+s,repeat:5,yoyo:!0,duration:.08}),gsap.to(e,{opacity:0,repeat:5,yoyo:!0,duration:.08}),gsap.to(a,{width:e.health-t.damage+"%",onComplete(){if(e.health-=t.damage,e.health<=0&&e.isEnemy){const{world:t}=window.gameEngine;t.get("player").status="static",t.get("battlebg").open=!1,t.remove(window.transport.battleEnemy),window.transport.stopBattle()}}})}}).to(this.position,{x:this.position.x,y:this.position.y})}}class L extends E{constructor(t,e){super(t,e-16,16,16),this.render.fillStyle="transparent"}}class C extends E{constructor(t,e){super(t,e,16,16),this.render.fillStyle="transparent"}}class I extends E{constructor(){super(b,x,0,0),this.cid="map",this.image=window.gameLoader.assets.map}draw(t){const{position:e,image:i}=this;t.drawImage(i,e.x,e.y)}}class M extends E{constructor(){super(b,x,0,0),this.cid="foreground",this.image=window.gameLoader.assets.foreground}draw(t){const{position:e,image:i}=this;t.drawImage(i,e.x,e.y)}}class A extends E{constructor(){const{canvas:t}=window.gameRender;super(0,0,t.width,t.height),this.cid="battlebg",this.image=window.gameLoader.assets.battlebg,this.open=!1}draw(t){if(this.open){const{position:e,image:i,size:s}=this;t.drawImage(i,e.x,e.y,s.width,s.height)}}}class P extends E{constructor(){const{canvas:t}=window.gameRender;super(t.width/2,t.height/2,16,16),this.cid="player",this.status="static",this.direction="down",this.frame=0,this.frameRow={down:0,up:1,left:2,right:3},this.frameMax=4,this.elapse=0,this.movement={down:[0,-4],up:[0,4],left:[4,0],right:[-4,0]},this.engine=window.gameEngine,this.image=window.gameLoader.assets.player,this.onKeyDownListener=this.onKeyDown.bind(this),this.onKeyUpListener=this.onKeyUp.bind(this)}init(){document.addEventListener("keydown",this.onKeyDownListener),document.addEventListener("keyup",this.onKeyUpListener)}onKeyDown(t){if("battle"!==this.status)switch(["w","a","s","d"].includes(t.key)&&(this.status="move"),t.key){case"w":this.direction="up";break;case"s":this.direction="down";break;case"a":this.direction="left";break;case"d":this.direction="right"}}onKeyUp(){"battle"!==this.status&&(this.status="static")}static(t){const{position:e,size:i,image:s,direction:a,frame:n,frameRow:o}=this;t.drawImage(s,16*n,16*o[a],i.width,i.height,e.x,e.y,4*i.width,4*i.height),this.elapse++,this.elapse%10==0&&(n<1?this.frame++:this.frame=0)}battle(t){const{position:e,size:i,image:s,direction:a,frame:n,frameRow:o}=this;t.drawImage(s,16*n,16*o[a],i.width,i.height,e.x,e.y,4*i.width,4*i.height)}move(t){const{translateList:e}=window,i=this.engine.world.get("collisions"),s=this.engine.world.get("battlezones"),{position:a,size:n,image:o,direction:r,frame:l,frameRow:h,frameMax:d,movement:c}=this,p=c[r];t.drawImage(o,16*l,16*h[r],n.width,n.height,a.x,a.y,4*n.width,4*n.height),this.elapse++,this.elapse%10==0&&(l<d-1?this.frame++:this.frame=2);const g=i.bodies;let m=!0;for(let u=0;u<g.length;u++){const t=g[u];if(f.detect(this,{position:{x:t.position.x+p[0],y:t.position.y+p[1]},size:t.size},3.5)){m=!1;break}}if(m){e.forEach((t=>{t.translate({x:p[0],y:p[1]})}));const t=s.bodies;for(let e=0;e<t.length;e++){const i=t[e],{size:s}=this;if(f.detect(this,i,4)&&f.detectArea(this,i,4)>s.width*s.height*16/2&&Math.random()<.05){const t=this.engine.world.get("battlebg"),e=new R;this.engine.world.add(e),this.status="battle",gsap.to("#battle-overlay",{opacity:1,repeat:3,duration:.4,onComplete(){gsap.to("#battle-overlay",{opacity:0}),t.open=!0,window.transport.battleEnemy=e,window.transport.startBattle()}});break}}}}draw(t){"function"==typeof this[this.status]&&this[this.status](t)}}class S extends E{constructor(){super(100,450,16,16),this.status="static",this.image=window.gameLoader.assets.player,this.frame=0,this.elapse=0,this.engine=window.gameEngine,this.health=100}static(t){if(this.engine.world.get("battlebg").open){const{position:e,size:i,image:s,frame:a,opacity:n}=this;t.save(),t.globalAlpha=n,t.drawImage(s,16*a,16,i.width,i.height,e.x,e.y,4*i.width,4*i.height),t.restore(),this.elapse++,this.elapse%10==0&&(a<1?this.frame++:this.frame=0)}}draw(t){"function"==typeof this[this.status]&&this[this.status](t)}}class R extends E{constructor(){super(450,300,16,16),this.status="static",this.image=window.gameLoader.assets.spirit,this.frame=0,this.frameMax=4,this.elapse=0,this.engine=window.gameEngine,this.isEnemy=!0,this.health=100}static(t){if(this.engine.world.get("battlebg").open){const{position:e,size:i,image:s,frame:a,frameMax:n,opacity:o}=this;t.save(),t.globalAlpha=o,t.drawImage(s,0,16*a,i.width,i.height,e.x,e.y,4*i.width,4*i.height),t.restore(),this.elapse++,this.elapse%10==0&&(a<n-1?this.frame++:this.frame=0)}}draw(t){"function"==typeof this[this.status]&&this[this.status](t)}}const B=window.gameLoader=new class{constructor(){this.pending=[],this.assets={},this.length=0,this.counter=0,this.percent=0}add(t,e){if(this.assets[t])return console.error(`Assets ID: ${t} was used, please use an unique id.`),!1;this.length+=1;const i=async function(t,e){return new Promise((i=>{const s=new Image;s.onload=()=>i({id:t,image:s}),s.src=e}))}(t,e).then((({id:t,image:e})=>{this.counter+=1,this.percent=Math.floor(this.counter/this.length*100),this.assets[t]=e}));return this.pending.push(i),!0}async load(){await Promise.all(this.pending),this.pending=[],console.log("load assets successful",this.assets)}},Y="./cdn/assets";async function K(){const t=window.gameEngine=new u,e=window.gameRender=new w({width:640,height:640,canvas:document.getElementById("my-game"),background:"transparent"});await B.load();const i=new I,s=new M,a=new A,n=new P,o=new S,r=function(){const t=new m,e=[];return v.forEach((({position:t})=>{e.push(new L(t.x,t.y))})),t.add(e),t.cid="collisions",t}(),l=function(){const t=new m,e=[];return k.forEach((({position:t})=>{e.push(new C(t.x,t.y))})),t.add(e),t.cid="battlezones",t}();n.init(),window.translateList=[i,s,...r.bodies,...l.bodies],window.transport.battlePlayer=o,t.world.add([i,n,r,l,s,a,o]),e.run(t)}B.add("map",`${Y}/SproudLandMap.png`),B.add("foreground",`${Y}/Foreground.png`),B.add("battlebg",`${Y}/battle-background.png`),B.add("player",`${Y}/Character.png`),B.add("spirit",`${Y}/Spirit.png`);const T={class:"game-wrapper"},D=o("canvas",{id:"my-game"},null,-1),_=o("div",{id:"battle-overlay"},null,-1),j=l('<div class="battle-lifebar battle-lifebar__enemy"><h4>Spirit</h4><div class="lifebar-wrapper"><div id="enemy-life" class="lifebar"></div></div></div><div class="battle-lifebar battle-lifebar__us"><h4>Maju</h4><div class="lifebar-wrapper"><div id="us-life" class="lifebar"></div></div></div>',2),F={key:0,id:"battle-panel"},$={class:"left"},U=o("div",{class:"right"},"Attack Type",-1),O=t({setup(t){const l=e(!1),h=e(!0),d={startBattle:function(){console.log("battle start"),l.value=!0},stopBattle:function(){console.log("battle end"),clearTimeout(p),l.value=!1,h.value=!0,d.battlePlayer.health=100}},c={tackle:{type:"tackle",damage:50}};let p=null;function g(t){h.value=!1,d.battlePlayer.attack({attack:c[t],target:d.battleEnemy}),p=setTimeout((()=>{!function(t){d.battleEnemy.attack({attack:c[t],target:d.battlePlayer}),setTimeout((()=>{h.value=!0}),2e3)}("tackle")}),2e3)}return i((()=>{window.transport=d,K()})),(t,e)=>(s(),a("div",T,[D,_,l.value?(s(),a(n,{key:0},[j,h.value?(s(),a("div",F,[o("div",$,[o("div",{onClick:e[0]||(e[0]=t=>g("tackle"))},"Tackle"),o("div",{onClick:e[1]||(e[1]=t=>g("tackle"))},"Tackle")]),U])):r("",!0)],64)):r("",!0)]))}});const q={class:"view-home"},H={class:"content"},V=o("h2",null,"Vue Tiny Pokemon Game",-1),G=o("div",{class:"intro"},[d(" Press "),o("kbd",null,"w"),d(", "),o("kbd",null,"a"),d(", "),o("kbd",null,"s"),d(", "),o("kbd",null,"d"),d(" to move "),o("br"),d(" Moving on "),o("mark",null,"dirt ground(泥地)"),d(" will jump out monster spirit ")],-1),N=t({setup:t=>(t,e)=>(s(),a("div",q,[o("div",H,[V,h(O),G])]))});p(t({setup:t=>(t,e)=>(s(),c(N))})).mount("#app")}}}))}();
