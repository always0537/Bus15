import { c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let listBtnCollaspe;
  $$unsubscribe_page();
  return `<nav class="navbar navbar-expand-lg bg-light"><div class="container-fluid"><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent"${add_attribute("this", listBtnCollaspe, 0)}><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item"${add_attribute("aria-current", $page.url.pathname === "/" ? "page" : void 0, 0)}><a class="nav-link active" href="/">Home</a></li>
				<li class="nav-item"${add_attribute("aria-current", $page.url.pathname === "/shop" ? "page" : void 0, 0)}><a class="nav-link active" href="/shop">商店</a></li>
				<li class="nav-item"${add_attribute("aria-current", $page.url.pathname === "/card-dex" ? "page" : void 0, 0)}><a class="nav-link active" href="/card-dex">卡册</a></li>
				<li class="nav-item"${add_attribute("aria-current", $page.url.pathname === "/player" ? "page" : void 0, 0)}><a class="nav-link active" href="/player">玩家名單</a></li>
				<li class="nav-item"${add_attribute("aria-current", $page.url.pathname === "/draw-card" ? "page" : void 0, 0)}><a class="nav-link active" href="/draw-card">我要抽卡</a></li></ul></div></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><header>${validate_component(Header, "Header").$$render($$result, {}, {}, {})}</header>

	<main><div class="container body-content my-2">${slots.default ? slots.default({}) : ``}</div></main>

	<footer class="my-2"><div class="text-center"><p>version 0.0.1
			</p></div></footer></div>`;
});
export {
  Layout as default
};
