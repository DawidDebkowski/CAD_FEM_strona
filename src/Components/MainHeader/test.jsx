import { h, renderToString } from "https://deno.land/x/jsx/mod.ts";
import { usePHP } from "https://deno.land/x/use_php/mod.ts";

export default async function handler(request) {
  const php = await usePHP(request, h);
  return new Response(
    await renderToString(
      <html>
        <head>
          <title>Use PHP</title>
        </head>
        <body>
          {await php`
              <?php phpinfo(); ?>
          `}
        </body>
      </html>
    ),
    {
      headers: {
        "content-type": "text/html; charset=UTF-8",
      },
    }
  );
}

export const config = {
  path: "/*",
  excluded_paths: "/public/*",
};