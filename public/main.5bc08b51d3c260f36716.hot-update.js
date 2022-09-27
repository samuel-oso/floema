/*! For license information please see main.5bc08b51d3c260f36716.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/animations/Paragraph.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var s=n("./node_modules/gsap/index.js"),i=n("./app/classes/Animation.js"),a=n("./app/utils/text.js"),l=n("./node_modules/lodash/each.js"),o=n.n(l);class r extends i.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,a.split)({element:this.element,append:!0}),(0,a.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){this.timelineIn=s.default.timeline({delay:.5}),this.timelineIn.set(this.element,{autoAlpha:1}),o()(this.elementsLines,((e,t)=>{this.timelineIn.fromTo(e,{y:"100%"},{delay:.2*t,duration:1.5,ease:"expo.out",y:"0%"},0)}))}animateOut(){s.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,a.calculate)(this.elementLinesSpans)}}},"./app/classes/Page.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var s=n("./node_modules/gsap/index.js"),i=n("./node_modules/prefix/index.js"),a=n.n(i),l=n("./node_modules/normalize-wheel/index.js"),o=n.n(l),r=n("./node_modules/lodash/each.js"),h=n.n(r),m=n("./node_modules/lodash/map.js"),d=n.n(m),u=n("./app/animations/Title.js"),c=n("./app/animations/Paragraph.js");Object(function(){var e=new Error("Cannot find module 'animations/Label'");throw e.code="MODULE_NOT_FOUND",e}()),Object(function(){var e=new Error("Cannot find module 'animations/Highlight'");throw e.code="MODULE_NOT_FOUND",e}());class p{constructor({element:e,elements:t,id:n}){this.selector=e,this.selectorChildren={...t,animationsLabel:'[data-animation="label"]',animationsParagraphs:'[data-animation="paragraph"]',animationsTitles:'[data-animation="title"]'},this.id=n,this.transformPrefix=a()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},d()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){this.animations=[],this.animationsTitles=d()(this.elements.animationsTitles,(e=>new u.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=d()(this.elements.animationsParagraphs,(e=>new c.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabels=d()(this.elements.animationsLabels,(e=>new Object(function(){var e=new Error("Cannot find module 'animations/Label'");throw e.code="MODULE_NOT_FOUND",e}())({element:e}))),this.animations.push(...this.animationsLabels),this.aimationsHighlights=d()(this.elements.aimationsHighlights,(e=>new Object(function(){var e=new Error("Cannot find module 'animations/Highlight'");throw e.code="MODULE_NOT_FOUND",e}())({element:e}))),this.animations.push(...this.aimationsHighlights)}show(){return new Promise((e=>{this.animationIn=s.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationIn=s.default.timeline(),this.animationIn.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),h()(this.animationsTitles,(e=>e.onResize()))}update(){this.scroll.target=s.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=s.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"68b86d66effec74489bb"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVL0IsRUFBQUEsUUFBQUEsTUFBQUEsWUFDcEJOLEtBQUtvQyxPQUFPQyxRQUNackMsS0FBS29DLE9BQU9FLE9BQ1osSUFHRXRDLEtBQUtvQyxPQUFPQyxRQUFVLE1BQ3hCckMsS0FBS29DLE9BQU9DLFFBQVUsR0FHcEJyQyxLQUFLSCxTQUFTMkUsVUFDaEJ4RSxLQUFLSCxTQUFTMkUsUUFBUUssTUFDcEI3RSxLQUFLNEIsaUJBQ0YsZUFBYzVCLEtBQUtvQyxPQUFPQyxhQUVsQyxDQUVEMkIsb0JBQ0VwQixPQUFPa0MsaUJBQWlCLGFBQWM5RSxLQUFLOEIsa0JBQzVDLENBRURvQyx1QkFDRXRCLE9BQU9tQyxvQkFBb0IsYUFBYy9FLEtBQUs4QixrQkFDL0Msa0JDL0xIa0QsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9hbmltYXRpb25zL1BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY2xhc3Nlcy9QYWdlLmpzIiwid2VicGFjazovL2Zsb2VtYS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcclxuXHJcbmltcG9ydCBBbmltYXRpb24gZnJvbSBcImNsYXNzZXMvQW5pbWF0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBjYWxjdWxhdGUsIHNwbGl0IH0gZnJvbSBcInV0aWxzL3RleHRcIjtcclxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhZ3JhcGggZXh0ZW5kcyBBbmltYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICBlbGVtZW50cyxcclxuICAgIH0pO1xyXG5cclxuICAgIHNwbGl0KHtcclxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxyXG4gICAgICBhcHBlbmQ6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzcGxpdCh7XHJcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcclxuICAgICAgYXBwZW5kOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50TGluZXNTcGFucyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZUluKCkge1xyXG4gICAgdGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7XHJcbiAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRpbWVsaW5lSW4uc2V0KHRoaXMuZWxlbWVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBlYWNoKHRoaXMuZWxlbWVudHNMaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXHJcbiAgICAgICAgbGluZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5OiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlbGF5OiBpbmRleCAqIDAuMixcclxuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXHJcbiAgICAgICAgICB5OiBcIjAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGVPdXQoKSB7XHJcbiAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW5zKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCI7XHJcblxyXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiO1xyXG5cclxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XHJcbmltcG9ydCBtYXAgZnJvbSBcImxvZGFzaC9tYXBcIjtcclxuXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiYW5pbWF0aW9ucy9UaXRsZVwiO1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSBcImFuaW1hdGlvbnMvTGFiZWxcIjtcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tIFwiYW5pbWF0aW9ucy9IaWdobGlnaHRcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IoeyBlbGVtZW50LCBlbGVtZW50cywgaWQgfSkge1xyXG4gICAgdGhpcy5zZWxlY3RvciA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnNlbGVjdG9yQ2hpbGRyZW4gPSB7XHJcbiAgICAgIC4uLmVsZW1lbnRzLFxyXG4gICAgICBhbmltYXRpb25zTGFiZWw6ICdbZGF0YS1hbmltYXRpb249XCJsYWJlbFwiXScsXHJcbiAgICAgIGFuaW1hdGlvbnNQYXJhZ3JhcGhzOiAnW2RhdGEtYW5pbWF0aW9uPVwicGFyYWdyYXBoXCJdJyxcclxuICAgICAgYW5pbWF0aW9uc1RpdGxlczogJ1tkYXRhLWFuaW1hdGlvbj1cInRpdGxlXCJdJyxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG5cclxuICAgIHRoaXMudHJhbnNmb3JtUHJlZml4ID0gUHJlZml4KFwidHJhbnNmb3JtXCIpO1xyXG5cclxuICAgIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQgPSB0aGlzLm9uTW91c2VXaGVlbC5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKTtcclxuICAgIHRoaXMuZWxlbWVudHMgPSB7fTtcclxuXHJcbiAgICB0aGlzLnNjcm9sbCA9IHtcclxuICAgICAgY3VycmVudDogMCxcclxuICAgICAgdGFyZ2V0OiAwLFxyXG4gICAgICBsYXN0OiAwLFxyXG4gICAgICBsaW1pdDogMCxcclxuICAgIH07XHJcblxyXG4gICAgbWFwKHRoaXMuc2VsZWN0b3JDaGlsZHJlbiwgKGVudHJ5LCBrZXkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93LkhUTUxFbGVtZW50IHx8XHJcbiAgICAgICAgZW50cnkgaW5zdGFuY2VvZiB3aW5kb3cuTm9kZUxpc3QgfHxcclxuICAgICAgICBBcnJheS5pc0FycmF5KGVudHJ5KVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBlbnRyeTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVudHJ5KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudHNba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIHRoaXMuZWxlbWVudHNba2V5XSA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVudHJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlQW5pbWF0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQW5pbWF0aW9ucygpIHtcclxuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFtdO1xyXG5cclxuICAgIC8vIFRpdGxlc1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uc1RpdGxlcyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNUaXRsZXMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgVGl0bGUoe1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zVGl0bGVzKTtcclxuXHJcbiAgICAvLyBQYXJhZ3JhcGhzXHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zUGFyYWdyYXBocyA9IG1hcChcclxuICAgICAgdGhpcy5lbGVtZW50cy5hbmltYXRpb25zUGFyYWdyYXBocyxcclxuICAgICAgKGVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBhcmFncmFwaCh7XHJcbiAgICAgICAgICBlbGVtZW50LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMpO1xyXG5cclxuICAgIC8vIExhYmVsc1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uc0xhYmVscyA9IG1hcCh0aGlzLmVsZW1lbnRzLmFuaW1hdGlvbnNMYWJlbHMsIChlbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgTGFiZWwoe1xyXG4gICAgICAgIGVsZW1lbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5hbmltYXRpb25zTGFiZWxzKTtcclxuXHJcbiAgICAvLyBIaWdobGlnaHRzXHJcblxyXG4gICAgdGhpcy5haW1hdGlvbnNIaWdobGlnaHRzID0gbWFwKFxyXG4gICAgICB0aGlzLmVsZW1lbnRzLmFpbWF0aW9uc0hpZ2hsaWdodHMsXHJcbiAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIaWdobGlnaHQoe1xyXG4gICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFpbWF0aW9uc0hpZ2hsaWdodHMpO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluID0gR1NBUC50aW1lbGluZSgpO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5mcm9tVG8oXHJcbiAgICAgICAgdGhpcy5lbGVtZW50LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGF1dG9BbHBoYTogMSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLmNhbGwoKF8pID0+IHtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4udG8odGhpcy5lbGVtZW50LCB7XHJcbiAgICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgICAgIG9uQ29tcGxldGU6IHJlc29sdmUsXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcclxuICAgIGNvbnN0IHsgcGl4ZWxZIH0gPSBOb3JtYWxpemVXaGVlbChldmVudCk7XHJcblxyXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ICs9IHBpeGVsWTtcclxuICB9XHJcblxyXG4gIG9uUmVzaXplKCkge1xyXG4gICAgaWYgKHRoaXMuZWxlbWVudHMud3JhcHBlcikge1xyXG4gICAgICB0aGlzLnNjcm9sbC5saW1pdCA9XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLmNsaWVudEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBlYWNoKHRoaXMuYW5pbWF0aW9uc1RpdGxlcywgKGFuaW1hdGlvbikgPT4gYW5pbWF0aW9uLm9uUmVzaXplKCkpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5zY3JvbGwudGFyZ2V0ID0gR1NBUC51dGlscy5jbGFtcChcclxuICAgICAgMCxcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldFxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gR1NBUC51dGlscy5pbnRlcnBvbGF0ZShcclxuICAgICAgdGhpcy5zY3JvbGwuY3VycmVudCxcclxuICAgICAgdGhpcy5zY3JvbGwudGFyZ2V0LFxyXG4gICAgICAwLjFcclxuICAgICk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2Nyb2xsLmN1cnJlbnQgPCAwLjAxKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5lbGVtZW50cy53cmFwcGVyLnN0eWxlW1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtUHJlZml4XHJcbiAgICAgIF0gPSBgdHJhbnNsYXRlWSgtJHt0aGlzLnNjcm9sbC5jdXJyZW50fXB4KWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsIHRoaXMub25Nb3VzZVdoZWVsRXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2OGI4NmQ2NmVmZmVjNzQ0ODliYlwiKSJdLCJuYW1lcyI6WyJQYXJhZ3JhcGgiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwic3BsaXQiLCJ0aGlzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0ZUluIiwidGltZWxpbmVJbiIsIkdTQVAiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImVhY2giLCJlbGVtZW50c0xpbmVzIiwibGluZSIsImluZGV4IiwiZnJvbVRvIiwieSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNhbGN1bGF0ZSIsIlBhZ2UiLCJpZCIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNMYWJlbCIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc1RpdGxlcyIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJtYXAiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiYW5pbWF0aW9ucyIsIlRpdGxlIiwicHVzaCIsImFuaW1hdGlvbnNMYWJlbHMiLCJMYWJlbCIsImFpbWF0aW9uc0hpZ2hsaWdodHMiLCJIaWdobGlnaHQiLCJzaG93IiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25JbiIsImNhbGwiLCJfIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJoaWRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lcnMiLCJ0byIsIm9uQ29tcGxldGUiLCJldmVudCIsInBpeGVsWSIsIk5vcm1hbGl6ZVdoZWVsIiwid3JhcHBlciIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYW5pbWF0aW9uIiwidXBkYXRlIiwic3R5bGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==