const AZURE_URL =
  'https://datot-pbi-agent-gvadhwc6hxctczfg.southcentralus-01.azurewebsites.net/api/pbiAgent';

/**
 * Cloudflare Pages Function — proxy server-side hacia Azure Function.
 * La petición va del edge de Cloudflare a Azure, nunca expone la URL
 * directa al navegador y elimina cualquier problema de CORS.
 */
export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    const azureRes = await fetch(AZURE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!azureRes.ok) {
      return new Response(
        JSON.stringify({ answer: `<b>Error del agente:</b> ${azureRes.status} ${azureRes.statusText}` }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await azureRes.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ answer: `<b>Error interno:</b> ${err.message}` }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

/** Maneja preflight OPTIONS */
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
