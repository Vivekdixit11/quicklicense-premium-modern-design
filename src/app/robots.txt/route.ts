export async function GET(request: Request) {
  const originFromReq = new URL(request.url).origin;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || originFromReq;
  const sitemapUrl = new URL('/sitemap.xml', baseUrl).toString();
  const body = `User-agent: *\nDisallow:\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate'
    }
  });
}

