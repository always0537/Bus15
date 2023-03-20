import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const img = "/30581778_2162740227072882_842558015222579200_o.jpg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let test;
  return `${$$result.head += `<!-- HEAD_svelte-1ycpfwa_START -->${$$result.title = `<title>CardDex</title>`, ""}<meta name="description" content="CardCollection"><!-- HEAD_svelte-1ycpfwa_END -->`, ""}

<div class="accordion" id="accordionExample"><div class="accordion-item"><h2 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">卡片編號 or 名稱
			</button></h2>
		<div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<button class="card-text">點擊詳細</button></div></div></div></div></div>
	<div class="accordion-item"><h2 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">卡片編號 or 名稱
			</button></h2>
		<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">點擊詳細</p></div></div></div></div></div>
	<div class="accordion-item"><h2 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">卡片編號 or 名稱
			</button></h2>
		<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"><div class="accordion-body"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><h5 class="card-title">卡片名稱</h5>
						<p class="card-text">點擊詳細</p></div></div></div></div></div></div>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"${add_attribute("this", test, 0)}><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h1 class="modal-title fs-5" id="exampleModalLabel">卡片名稱</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>
			<div class="modal-body"><div class="card"><img${add_attribute("src", img, 0)} class="card-img-top" alt="...">
					<div class="card-body"><p class="card-text">卡片詳細說明：測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試測試
						</p></div></div></div>
			<div class="modal-footer justify-content-center"><button type="button" class="btn btn-primary" data-bs-dismiss="modal">Button1</button>
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Button2</button></div></div></div></div>`;
});
export {
  Page as default
};
