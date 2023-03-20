import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const img = "/30581778_2162740227072882_842558015222579200_o.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1g79quz_START -->${$$result.title = `<title>Shop</title>`, ""}<meta name="description" content="BuySomething"><!-- HEAD_svelte-1g79quz_END -->`, ""}

<ul class="nav nav-tabs" id="myTab" role="tablist"><li class="nav-item" role="presentation"><button class="nav-link active" id="public-tab" data-bs-toggle="tab" data-bs-target="#public-tab-pane" type="button" role="tab" aria-controls="public-tab-pane" aria-selected="true">一般商店</button></li>
  <li class="nav-item" role="presentation"><button class="nav-link" id="player-tab" data-bs-toggle="tab" data-bs-target="#player-tab-pane" type="button" role="tab" aria-controls="player-tab-pane" aria-selected="false">玩家商店</button></li></ul>
<div class="tab-content" id="myTabContent"><div class="tab-pane fade show active" id="public-tab-pane" role="tabpanel" aria-labelledby="public-tab" tabindex="0"><div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4"><div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div>
			<div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div>	
			<div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div>
			<div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div></div></div>
  <div class="tab-pane fade" id="player-tab-pane" role="tabpanel" aria-labelledby="player-tab" tabindex="0"><div class="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4"><div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div>
			<div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div>	
			<div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div>
			<div class="col"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">卡片金額</p></div></div></div></div></div></div>`;
});
export {
  Page as default
};
