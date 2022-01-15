import {
  Application,
  Context,
  Router,
  send,
  Status,
} from "https://deno.land/x/oak/mod.ts";
import { info } from "https://deno.land/std/log/mod.ts";

import { checkFileExist } from "./util/checkFileExist.ts";

const router = new Router();
const app = new Application();

// serve home page
router.get("/", async (ctx: Context) => {
  await send(ctx, "/", {
    root: `${Deno.cwd()}/../client/views`,
    index: "index.html",
  });
});

// serve favoicon.ico
router.get("/favicon.ico", async (ctx: Context) => {
  await send(ctx, "/favicon.ico", {
    root: `${Deno.cwd()}/../client/public`,
    index: "favicon.ico",
  });
});

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  if (await checkFileExist(ctx)) {
    await send(ctx, ctx.request.url.pathname, {
      root: `${Deno.cwd()}/../client/`,
    });
  } else {
    next();
  }
});

// page not found
app.use((context) => {
  context.response.status = Status.NotFound;
  context.response.body = `"${context.request.url}" not found`;
});

info("serving on http://localhost:8000");
await app.listen({ port: 8000 });
