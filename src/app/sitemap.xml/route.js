import { HOST, HOST_CLIENT, v } from "@/config";

export async function GET() {
  const response = await fetch(`${HOST_CLIENT}/api/${v}/admin/sitemap`, {
    cache: "no-store",
    next: { revalidate: 0 }
  });
  const xml = await response.text();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
    },
  });
}