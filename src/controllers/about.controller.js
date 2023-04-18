import { aboutTemplate } from "../views/aboutView.js";

export function aboutController(ctx) {
    ctx.render(aboutTemplate());
}