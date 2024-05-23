import { serve } from "https://deno.land/std/http/server.ts";
import { extname } from "https://deno.land/std/path/mod.ts";
import { lookup } from "https://deno.land/x/media_types/mod.ts";

const IP = Deno.networkInterfaces()
    .flat()
    .find(iface => iface.family === 'IPv4' && !iface.internal)?.address;
    
const PORT = 3000;

const handler = async (req) => {
    const url = new URL(req.url);
    const filePath = url.pathname == "/" ? "./dist/index.html" : `./dist${url.pathname}`;

    try {
        const fileContent = await Deno.readFile(filePath);
        const contentType = lookup(extname(filePath)) || "text/plain";
        return new Response(fileContent, {
            status: 200,
            headers: { "Content-Type": contentType },
        });
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            return new Response("Page not found", { status: 404 });
        } else {
            return new Response("Internal server error", { status: 500 });
        }
    }
};

console.log(`HTTP webserver is running at: http://${IP}:${PORT}`);
await serve(handler, { hostname: IP, port: PORT });
