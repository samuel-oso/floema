/*! For license information please see main.71f8d59ae77ce59b8e23.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/index.js":(e,t,a)=>{a.r(t);var s=a("./node_modules/lodash/each.js"),i=a.n(s),n=a("./app/components/Navigation.js"),o=a("./app/components/Preloader.js"),h=a("./app/pages/About/index.js"),p=a("./app/pages/Collections/index.js"),d=a("./app/pages/Detail/index.js"),r=a("./app/pages/Home/index.js");new class{constructor(){this.createContent(),this.createPreloader(),this.createNavigation(),this.createPages(),this.addEventListeners(),this.addLinkListeners(),this.update()}createNavigation(){this.navigation=new n.default({template:this.template})}createPreloader(){this.preloader=new o.default,this.preloader.once("completed",this.onPreloaded.bind(this))}createContent(){this.content=document.querySelector(".content"),this.template=this.content.getAttribute("data-template")}createPages(){this.pages={about:new h.default,collections:new p.default,home:new r.default,detail:new d.default},this.page=this.pages[this.template],this.page.create()}onPreloaded(){this.preloader.destroy(),this.onResize(),this.page.show()}onPopState(){this.onChange({url:window.location.pathname,push:!1})}async onChange({url:e,push:t=!0}){await this.page.hide();const a=await window.fetch(e);if(200===a.status){const s=await a.text(),i=document.createElement("div");t&&window.history.pushState({},"",e),i.innerHTML=s;const n=i.querySelector(".content");this.content.innerHTML=n.innerHTML,this.template=n.getAttribute("data-template"),this.navigation.onChange(this.template),this.content.setAttribute("data-template",this.template),this.page=this.pages[this.template],this.page.create(),this.onResize(),this.page.show(),this.addLinkListeners()}else console.error(`response status: ${a.status}`)}onResize(){this.page&&this.page.onResize&&this.page.onResize()}update(){this.page&&this.page.update&&this.page.update(),this.frame=window.requestAnimationFrame(this.update.bind(this))}addEventListeners(){window.addEventListener("popstate",this.onPopState.bind(this)),window.addEventListener("resize",this.onResize.bind(this))}addLinkListeners(){const e=document.querySelectorAll("a");i()(e,(e=>{e.onclick=t=>{t.preventDefault();const{href:a}=e;this.onChange({url:a})}}))}}}},(function(e){e.h=()=>"6fa8e2b22af508a228d4"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2Zsb2VtYS8uL2FwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBlYWNoIGZyb20gXCJsb2Rhc2gvZWFjaFwiO1xyXG5cclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcImNvbXBvbmVudHMvTmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgUHJlbG9hZGVyIGZyb20gXCJjb21wb25lbnRzL1ByZWxvYWRlclwiO1xyXG5cclxuaW1wb3J0IEFib3V0IGZyb20gXCJwYWdlcy9BYm91dFwiO1xyXG5pbXBvcnQgQ29sbGVjdGlvbnMgZnJvbSBcInBhZ2VzL0NvbGxlY3Rpb25zXCI7XHJcbmltcG9ydCBEZXRhaWwgZnJvbSBcInBhZ2VzL0RldGFpbFwiO1xyXG5pbXBvcnQgSG9tZSBmcm9tIFwicGFnZXMvSG9tZVwiO1xyXG5cclxuY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY3JlYXRlQ29udGVudCgpO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlUHJlbG9hZGVyKCk7XHJcbiAgICB0aGlzLmNyZWF0ZU5hdmlnYXRpb24oKTtcclxuICAgIHRoaXMuY3JlYXRlUGFnZXMoKTtcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTmF2aWdhdGlvbigpIHtcclxuICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uKHtcclxuICAgICAgdGVtcGxhdGU6IHRoaXMudGVtcGxhdGUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVByZWxvYWRlcigpIHtcclxuICAgIHRoaXMucHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcigpO1xyXG4gICAgdGhpcy5wcmVsb2FkZXIub25jZShcImNvbXBsZXRlZFwiLCB0aGlzLm9uUHJlbG9hZGVkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ29udGVudCgpIHtcclxuICAgIHRoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmNvbnRlbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS10ZW1wbGF0ZVwiKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZVBhZ2VzKCkge1xyXG4gICAgdGhpcy5wYWdlcyA9IHtcclxuICAgICAgYWJvdXQ6IG5ldyBBYm91dCgpLFxyXG4gICAgICBjb2xsZWN0aW9uczogbmV3IENvbGxlY3Rpb25zKCksXHJcbiAgICAgIGhvbWU6IG5ldyBIb21lKCksXHJcbiAgICAgIGRldGFpbDogbmV3IERldGFpbCgpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2VzW3RoaXMudGVtcGxhdGVdO1xyXG4gICAgdGhpcy5wYWdlLmNyZWF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gRXZlbnRzXHJcbiAgb25QcmVsb2FkZWQoKSB7XHJcbiAgICB0aGlzLnByZWxvYWRlci5kZXN0cm95KCk7XHJcblxyXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xyXG5cclxuICAgIHRoaXMucGFnZS5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBvblBvcFN0YXRlKCkge1xyXG4gICAgdGhpcy5vbkNoYW5nZSh7IHVybDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCBwdXNoOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9uQ2hhbmdlKHsgdXJsLCBwdXNoID0gdHJ1ZSB9KSB7XHJcbiAgICBhd2FpdCB0aGlzLnBhZ2UuaGlkZSgpO1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCBodG1sID0gYXdhaXQgcmVzLnRleHQoKTtcclxuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgICAgIGlmIChwdXNoKSB7XHJcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBcIlwiLCB1cmwpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcclxuXHJcbiAgICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xyXG4gICAgICB0aGlzLmNvbnRlbnQuaW5uZXJIVE1MID0gZGl2Q29udGVudC5pbm5lckhUTUw7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSBkaXZDb250ZW50LmdldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIik7XHJcbiAgICAgIHRoaXMubmF2aWdhdGlvbi5vbkNoYW5nZSh0aGlzLnRlbXBsYXRlKTtcclxuICAgICAgdGhpcy5jb250ZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGVtcGxhdGVcIiwgdGhpcy50ZW1wbGF0ZSk7XHJcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZXNbdGhpcy50ZW1wbGF0ZV07XHJcbiAgICAgIHRoaXMucGFnZS5jcmVhdGUoKTtcclxuICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICB0aGlzLnBhZ2Uuc2hvdygpO1xyXG4gICAgICB0aGlzLmFkZExpbmtMaXN0ZW5lcnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoYHJlc3BvbnNlIHN0YXR1czogJHtyZXMuc3RhdHVzfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25SZXNpemUoKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS5vblJlc2l6ZSkge1xyXG4gICAgICB0aGlzLnBhZ2Uub25SZXNpemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIExvb3BcclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5wYWdlICYmIHRoaXMucGFnZS51cGRhdGUpIHtcclxuICAgICAgdGhpcy5wYWdlLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgLy8gTGlzdGVuZXJzXHJcbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsIHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25SZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhZGRMaW5rTGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVwiKTtcclxuXHJcbiAgICBlYWNoKGxpbmtzLCAobGluaykgPT4ge1xyXG4gICAgICBsaW5rLm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB7IGhyZWYgfSA9IGxpbms7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh7IHVybDogaHJlZiB9KTtcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxubmV3IEFwcCgpO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2ZmE4ZTJiMjJhZjUwOGEyMjhkNFwiKSJdLCJuYW1lcyI6WyJjb25zdHJ1Y3RvciIsInRoaXMiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlUHJlbG9hZGVyIiwiY3JlYXRlTmF2aWdhdGlvbiIsImNyZWF0ZVBhZ2VzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRMaW5rTGlzdGVuZXJzIiwidXBkYXRlIiwibmF2aWdhdGlvbiIsIk5hdmlnYXRpb24iLCJ0ZW1wbGF0ZSIsInByZWxvYWRlciIsIlByZWxvYWRlciIsIm9uY2UiLCJvblByZWxvYWRlZCIsImJpbmQiLCJjb250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwicGFnZXMiLCJhYm91dCIsIkFib3V0IiwiY29sbGVjdGlvbnMiLCJDb2xsZWN0aW9ucyIsImhvbWUiLCJIb21lIiwiZGV0YWlsIiwiRGV0YWlsIiwicGFnZSIsImNyZWF0ZSIsImRlc3Ryb3kiLCJvblJlc2l6ZSIsInNob3ciLCJvblBvcFN0YXRlIiwib25DaGFuZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicHVzaCIsImhpZGUiLCJyZXMiLCJmZXRjaCIsInN0YXR1cyIsImh0bWwiLCJ0ZXh0IiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJpbm5lckhUTUwiLCJkaXZDb250ZW50Iiwic2V0QXR0cmlidXRlIiwiY29uc29sZSIsImVycm9yIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwibGlua3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWFjaCIsImxpbmsiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=