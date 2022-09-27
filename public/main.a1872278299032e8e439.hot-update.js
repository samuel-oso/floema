/*! For license information please see main.a1872278299032e8e439.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/animations/Label.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var i=s("./node_modules/gsap/index.js"),n=s("./app/classes/Animation.js"),a=s("./app/utils/text.js"),l=s("./node_modules/lodash/each.js"),o=s.n(l);class h extends n.default{constructor({element:e,elements:t}){super({element:e,elements:t}),(0,a.split)({element:this.element,append:!0}),(0,a.split)({element:this.element,append:!0}),this.elementLinesSpans=this.element.querySelectorAll("span span")}animateIn(){this.timelineIn=i.default.timeline({delay:.5}),this.timelineIn.set(this.element,{autoAlpha:1}),o()(this.elementsLines,((e,t)=>{this.timelineIn.fromTo(e,{y:"100%"},{delay:.2*t,duration:1.5,ease:"expo.out",y:"0%"},0)}))}animateOut(){i.default.set(this.element,{autoAlpha:0})}onResize(){this.elementsLines=(0,a.calculate)(this.elementLinesSpans)}}},"./app/classes/Page.js":(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var i=s("./node_modules/gsap/index.js"),n=s("./node_modules/prefix/index.js"),a=s.n(n),l=s("./node_modules/normalize-wheel/index.js"),o=s.n(l),h=s("./node_modules/lodash/each.js"),r=s.n(h),m=s("./node_modules/lodash/map.js"),d=s.n(m),u=s("./app/animations/Title.js"),p=s("./app/animations/Paragraph.js"),c=s("./app/animations/Label.js");Object(function(){var e=new Error("Cannot find module 'animations/Highlight'");throw e.code="MODULE_NOT_FOUND",e}());class f{constructor({element:e,elements:t,id:s}){this.selector=e,this.selectorChildren={...t,animationsLabel:'[data-animation="label"]',animationsParagraphs:'[data-animation="paragraph"]',animationsTitles:'[data-animation="title"]'},this.id=s,this.transformPrefix=a()("transform"),this.onMouseWheelEvent=this.onMouseWheel.bind(this)}create(){this.element=document.querySelector(this.selector),this.elements={},this.scroll={current:0,target:0,last:0,limit:0},d()(this.selectorChildren,((e,t)=>{e instanceof window.HTMLElement||e instanceof window.NodeList||Array.isArray(e)?this.elements[t]=e:(this.elements[t]=document.querySelectorAll(e),0===this.elements[t].length?this.elements[t]=null:1===this.elements[t].length&&(this.elements[t]=document.querySelector(e)))})),this.createAnimations()}createAnimations(){this.animations=[],this.animationsTitles=d()(this.elements.animationsTitles,(e=>new u.default({element:e}))),this.animations.push(...this.animationsTitles),this.animationsParagraphs=d()(this.elements.animationsParagraphs,(e=>new p.default({element:e}))),this.animations.push(...this.animationsParagraphs),this.animationsLabels=d()(this.elements.animationsLabels,(e=>new c.default({element:e}))),this.animations.push(...this.animationsLabels),this.aimationsHighlights=d()(this.elements.aimationsHighlights,(e=>new Object(function(){var e=new Error("Cannot find module 'animations/Highlight'");throw e.code="MODULE_NOT_FOUND",e}())({element:e}))),this.animations.push(...this.aimationsHighlights)}show(){return new Promise((e=>{this.animationIn=i.default.timeline(),this.animationIn.fromTo(this.element,{autoAlpha:0},{autoAlpha:1}),this.animationIn.call((t=>{this.addEventListeners(),e()}))}))}hide(){return new Promise((e=>{this.removeEventListeners(),this.animationIn=i.default.timeline(),this.animationIn.to(this.element,{autoAlpha:0,onComplete:e})}))}onMouseWheel(e){const{pixelY:t}=o()(e);this.scroll.target+=t}onResize(){this.elements.wrapper&&(this.scroll.limit=this.elements.wrapper.clientHeight-window.innerHeight),r()(this.animations,(e=>e.onResize()))}update(){this.scroll.target=i.default.utils.clamp(0,this.scroll.limit,this.scroll.target),this.scroll.current=i.default.utils.interpolate(this.scroll.current,this.scroll.target,.1),this.scroll.current<.01&&(this.scroll.current=0),this.elements.wrapper&&(this.elements.wrapper.style[this.transformPrefix]=`translateY(-${this.scroll.current}px)`)}addEventListeners(){window.addEventListener("mousewheel",this.onMouseWheelEvent)}removeEventListeners(){window.removeEventListener("mousewheel",this.onMouseWheelEvent)}}}},(function(e){e.h=()=>"2c8b66bfb2fb8c9d5580"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9DLFFBQVUsTUFDeEJyQyxLQUFLb0MsT0FBT0MsUUFBVSxHQUdwQnJDLEtBQUtILFNBQVMyRSxVQUNoQnhFLEtBQUtILFNBQVMyRSxRQUFRSyxNQUNwQjdFLEtBQUs0QixpQkFDRixlQUFjNUIsS0FBS29DLE9BQU9DLGFBRWxDLENBRUQyQixvQkFDRXBCLE9BQU9rQyxpQkFBaUIsYUFBYzlFLEtBQUs4QixrQkFDNUMsQ0FFRG9DLHVCQUNFdEIsT0FBT21DLG9CQUFvQixhQUFjL0UsS0FBSzhCLGtCQUMvQyxrQkNoTUhrRCxFQUFvQkMsRUFBSSxJQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2FuaW1hdGlvbnMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vZmxvZW1hLy4vYXBwL2NsYXNzZXMvUGFnZS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XHJcblxyXG5pbXBvcnQgQW5pbWF0aW9uIGZyb20gXCJjbGFzc2VzL0FuaW1hdGlvblwiO1xyXG5cclxuaW1wb3J0IHsgY2FsY3VsYXRlLCBzcGxpdCB9IGZyb20gXCJ1dGlscy90ZXh0XCI7XHJcbmltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGl0bGUgZXh0ZW5kcyBBbmltYXRpb24ge1xyXG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMgfSkge1xyXG4gICAgc3VwZXIoe1xyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICBlbGVtZW50cyxcclxuICAgIH0pO1xyXG5cclxuICAgIHNwbGl0KHtcclxuICAgICAgZWxlbWVudDogdGhpcy5lbGVtZW50LFxyXG4gICAgICBhcHBlbmQ6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBzcGxpdCh7XHJcbiAgICAgIGVsZW1lbnQ6IHRoaXMuZWxlbWVudCxcclxuICAgICAgYXBwZW5kOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5lbGVtZW50TGluZXNTcGFucyA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhbiBzcGFuXCIpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZUluKCkge1xyXG4gICAgdGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7XHJcbiAgICAgIGRlbGF5OiAwLjUsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnRpbWVsaW5lSW4uc2V0KHRoaXMuZWxlbWVudCwge1xyXG4gICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICB9KTtcclxuXHJcbiAgICBlYWNoKHRoaXMuZWxlbWVudHNMaW5lcywgKGxpbmUsIGluZGV4KSA9PiB7XHJcbiAgICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXHJcbiAgICAgICAgbGluZSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB5OiBcIjEwMCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGRlbGF5OiBpbmRleCAqIDAuMixcclxuICAgICAgICAgIGR1cmF0aW9uOiAxLjUsXHJcbiAgICAgICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXHJcbiAgICAgICAgICB5OiBcIjAlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAwXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGVPdXQoKSB7XHJcbiAgICBHU0FQLnNldCh0aGlzLmVsZW1lbnQsIHtcclxuICAgICAgYXV0b0FscGhhOiAwLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudHNMaW5lcyA9IGNhbGN1bGF0ZSh0aGlzLmVsZW1lbnRMaW5lc1NwYW5zKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEdTQVAgZnJvbSBcImdzYXBcIjtcclxuaW1wb3J0IFByZWZpeCBmcm9tIFwicHJlZml4XCI7XHJcblxyXG5pbXBvcnQgTm9ybWFsaXplV2hlZWwgZnJvbSBcIm5vcm1hbGl6ZS13aGVlbFwiO1xyXG5cclxuaW1wb3J0IGVhY2ggZnJvbSBcImxvZGFzaC9lYWNoXCI7XHJcbmltcG9ydCBtYXAgZnJvbSBcImxvZGFzaC9tYXBcIjtcclxuXHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiYW5pbWF0aW9ucy9UaXRsZVwiO1xyXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCJhbmltYXRpb25zL1BhcmFncmFwaFwiO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSBcImFuaW1hdGlvbnMvTGFiZWxcIjtcclxuaW1wb3J0IEhpZ2hsaWdodCBmcm9tIFwiYW5pbWF0aW9ucy9IaWdobGlnaHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2Uge1xyXG4gIGNvbnN0cnVjdG9yKHsgZWxlbWVudCwgZWxlbWVudHMsIGlkIH0pIHtcclxuICAgIHRoaXMuc2VsZWN0b3IgPSBlbGVtZW50O1xyXG4gICAgdGhpcy5zZWxlY3RvckNoaWxkcmVuID0ge1xyXG4gICAgICAuLi5lbGVtZW50cyxcclxuICAgICAgYW5pbWF0aW9uc0xhYmVsOiAnW2RhdGEtYW5pbWF0aW9uPVwibGFiZWxcIl0nLFxyXG4gICAgICBhbmltYXRpb25zUGFyYWdyYXBoczogJ1tkYXRhLWFuaW1hdGlvbj1cInBhcmFncmFwaFwiXScsXHJcbiAgICAgIGFuaW1hdGlvbnNUaXRsZXM6ICdbZGF0YS1hbmltYXRpb249XCJ0aXRsZVwiXScsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaWQgPSBpZDtcclxuXHJcbiAgICB0aGlzLnRyYW5zZm9ybVByZWZpeCA9IFByZWZpeChcInRyYW5zZm9ybVwiKTtcclxuXHJcbiAgICB0aGlzLm9uTW91c2VXaGVlbEV2ZW50ID0gdGhpcy5vbk1vdXNlV2hlZWwuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik7XHJcbiAgICB0aGlzLmVsZW1lbnRzID0ge307XHJcblxyXG4gICAgdGhpcy5zY3JvbGwgPSB7XHJcbiAgICAgIGN1cnJlbnQ6IDAsXHJcbiAgICAgIHRhcmdldDogMCxcclxuICAgICAgbGFzdDogMCxcclxuICAgICAgbGltaXQ6IDAsXHJcbiAgICB9O1xyXG5cclxuICAgIG1hcCh0aGlzLnNlbGVjdG9yQ2hpbGRyZW4sIChlbnRyeSwga2V5KSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBlbnRyeSBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MRWxlbWVudCB8fFxyXG4gICAgICAgIGVudHJ5IGluc3RhbmNlb2Ygd2luZG93Lk5vZGVMaXN0IHx8XHJcbiAgICAgICAgQXJyYXkuaXNBcnJheShlbnRyeSlcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZW50cnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbnRyeSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzW2tleV0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnRzW2tleV0gPSBudWxsO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50c1trZXldLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgdGhpcy5lbGVtZW50c1trZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbnRyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUFuaW1hdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUFuaW1hdGlvbnMoKSB7XHJcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbXTtcclxuXHJcbiAgICAvLyBUaXRsZXNcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnNUaXRsZXMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zVGl0bGVzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFRpdGxlKHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc1RpdGxlcyk7XHJcblxyXG4gICAgLy8gUGFyYWdyYXBoc1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9uc1BhcmFncmFwaHMgPSBtYXAoXHJcbiAgICAgIHRoaXMuZWxlbWVudHMuYW5pbWF0aW9uc1BhcmFncmFwaHMsXHJcbiAgICAgIChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJhZ3JhcGgoe1xyXG4gICAgICAgICAgZWxlbWVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnMucHVzaCguLi50aGlzLmFuaW1hdGlvbnNQYXJhZ3JhcGhzKTtcclxuXHJcbiAgICAvLyBMYWJlbHNcclxuXHJcbiAgICB0aGlzLmFuaW1hdGlvbnNMYWJlbHMgPSBtYXAodGhpcy5lbGVtZW50cy5hbmltYXRpb25zTGFiZWxzLCAoZWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IExhYmVsKHtcclxuICAgICAgICBlbGVtZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKC4uLnRoaXMuYW5pbWF0aW9uc0xhYmVscyk7XHJcblxyXG4gICAgLy8gSGlnaGxpZ2h0c1xyXG5cclxuICAgIHRoaXMuYWltYXRpb25zSGlnaGxpZ2h0cyA9IG1hcChcclxuICAgICAgdGhpcy5lbGVtZW50cy5haW1hdGlvbnNIaWdobGlnaHRzLFxyXG4gICAgICAoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgSGlnaGxpZ2h0KHtcclxuICAgICAgICAgIGVsZW1lbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25zLnB1c2goLi4udGhpcy5haW1hdGlvbnNIaWdobGlnaHRzKTtcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgdGhpcy5hbmltYXRpb25JbiA9IEdTQVAudGltZWxpbmUoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4uZnJvbVRvKFxyXG4gICAgICAgIHRoaXMuZWxlbWVudCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBhdXRvQWxwaGE6IDEsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25Jbi5jYWxsKChfKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW4gPSBHU0FQLnRpbWVsaW5lKCk7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGlvbkluLnRvKHRoaXMuZWxlbWVudCwge1xyXG4gICAgICAgIGF1dG9BbHBoYTogMCxcclxuICAgICAgICBvbkNvbXBsZXRlOiByZXNvbHZlLFxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVdoZWVsKGV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHBpeGVsWSB9ID0gTm9ybWFsaXplV2hlZWwoZXZlbnQpO1xyXG5cclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCArPSBwaXhlbFk7XHJcbiAgfVxyXG5cclxuICBvblJlc2l6ZSgpIHtcclxuICAgIGlmICh0aGlzLmVsZW1lbnRzLndyYXBwZXIpIHtcclxuICAgICAgdGhpcy5zY3JvbGwubGltaXQgPVxyXG4gICAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5jbGllbnRIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZWFjaCh0aGlzLmFuaW1hdGlvbnMsIChhbmltYXRpb24pID0+IGFuaW1hdGlvbi5vblJlc2l6ZSgpKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuc2Nyb2xsLnRhcmdldCA9IEdTQVAudXRpbHMuY2xhbXAoXHJcbiAgICAgIDAsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmxpbWl0LFxyXG4gICAgICB0aGlzLnNjcm9sbC50YXJnZXRcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5zY3JvbGwuY3VycmVudCA9IEdTQVAudXRpbHMuaW50ZXJwb2xhdGUoXHJcbiAgICAgIHRoaXMuc2Nyb2xsLmN1cnJlbnQsXHJcbiAgICAgIHRoaXMuc2Nyb2xsLnRhcmdldCxcclxuICAgICAgMC4xXHJcbiAgICApO1xyXG5cclxuICAgIGlmICh0aGlzLnNjcm9sbC5jdXJyZW50IDwgMC4wMSkge1xyXG4gICAgICB0aGlzLnNjcm9sbC5jdXJyZW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5lbGVtZW50cy53cmFwcGVyKSB7XHJcbiAgICAgIHRoaXMuZWxlbWVudHMud3JhcHBlci5zdHlsZVtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybVByZWZpeFxyXG4gICAgICBdID0gYHRyYW5zbGF0ZVkoLSR7dGhpcy5zY3JvbGwuY3VycmVudH1weClgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNld2hlZWxcIiwgdGhpcy5vbk1vdXNlV2hlZWxFdmVudCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVFdmVudExpc3RlbmVycygpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLCB0aGlzLm9uTW91c2VXaGVlbEV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMmM4YjY2YmZiMmZiOGM5ZDU1ODBcIikiXSwibmFtZXMiOlsiVGl0bGUiLCJBbmltYXRpb24iLCJjb25zdHJ1Y3RvciIsImVsZW1lbnQiLCJlbGVtZW50cyIsInN1cGVyIiwic3BsaXQiLCJ0aGlzIiwiYXBwZW5kIiwiZWxlbWVudExpbmVzU3BhbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYW5pbWF0ZUluIiwidGltZWxpbmVJbiIsIkdTQVAiLCJkZWxheSIsInNldCIsImF1dG9BbHBoYSIsImVhY2giLCJlbGVtZW50c0xpbmVzIiwibGluZSIsImluZGV4IiwiZnJvbVRvIiwieSIsImR1cmF0aW9uIiwiZWFzZSIsImFuaW1hdGVPdXQiLCJvblJlc2l6ZSIsImNhbGN1bGF0ZSIsIlBhZ2UiLCJpZCIsInNlbGVjdG9yIiwic2VsZWN0b3JDaGlsZHJlbiIsImFuaW1hdGlvbnNMYWJlbCIsImFuaW1hdGlvbnNQYXJhZ3JhcGhzIiwiYW5pbWF0aW9uc1RpdGxlcyIsInRyYW5zZm9ybVByZWZpeCIsIlByZWZpeCIsIm9uTW91c2VXaGVlbEV2ZW50Iiwib25Nb3VzZVdoZWVsIiwiYmluZCIsImNyZWF0ZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbCIsImN1cnJlbnQiLCJ0YXJnZXQiLCJsYXN0IiwibGltaXQiLCJtYXAiLCJlbnRyeSIsImtleSIsIndpbmRvdyIsIkhUTUxFbGVtZW50IiwiTm9kZUxpc3QiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJjcmVhdGVBbmltYXRpb25zIiwiYW5pbWF0aW9ucyIsInB1c2giLCJQYXJhZ3JhcGgiLCJhbmltYXRpb25zTGFiZWxzIiwiTGFiZWwiLCJhaW1hdGlvbnNIaWdobGlnaHRzIiwiSGlnaGxpZ2h0Iiwic2hvdyIsIlByb21pc2UiLCJyZXNvbHZlIiwiYW5pbWF0aW9uSW4iLCJjYWxsIiwiXyIsImFkZEV2ZW50TGlzdGVuZXJzIiwiaGlkZSIsInJlbW92ZUV2ZW50TGlzdGVuZXJzIiwidG8iLCJvbkNvbXBsZXRlIiwiZXZlbnQiLCJwaXhlbFkiLCJOb3JtYWxpemVXaGVlbCIsIndyYXBwZXIiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFuaW1hdGlvbiIsInVwZGF0ZSIsInN0eWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=