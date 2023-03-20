import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-t2qach_START -->${$$result.title = `<title>DrawCard</title>`, ""}<meta name="description" content="GetCard"><!-- HEAD_svelte-t2qach_END -->`, ""}

<div class="row"><div class="col text-center"><button class="btn btn-primary m-2 d-inline">單抽出奇蹟測試</button></div></div>
<div class="row"><div class="col text-center"><button class="btn btn-danger m-2 d-inline">一次來十張</button></div></div>`;
});
export {
  Page as default
};
