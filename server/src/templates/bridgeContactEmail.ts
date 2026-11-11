import type { BridgeContact } from '../schemas/bridgeContactSchema.js';

const countries = {
  br: 'Brasil', mx: 'México', co: 'Colômbia', cl: 'Chile', pe: 'Peru',
  ar: 'Argentina', ec: 'Equador', cr: 'Costa Rica', other: 'Outro',
} as const;

const volumes = {
  v1: 'Até US$ 100 mil',
  v2: 'US$ 100 mil a 500 mil',
  v3: 'US$ 500 mil a 2 milhões',
  v4: 'Acima de US$ 2 milhões',
} as const;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    };
    return entities[character] ?? character;
  });
}

export function buildBridgeContactEmail(contact: BridgeContact): { subject: string; html: string; text: string } {
  const origin = 'Contato enviado pelo formulário da página /bridge.';
  const message = contact.message || 'Não informada';
  const fields: [string, string][] = [
    ['Nome', contact.name],
    ['Empresa', contact.company],
    ['E-mail', contact.email],
    ['País', countries[contact.country]],
    ['Volume mensal estimado', volumes[contact.volume]],
    ['Idioma do formulário', contact.language],
    ['Consentimento para contato', 'Sim'],
  ];

  return {
    subject: 'Novo contato — Mundpay',
    text: `${origin}\n\n${[...fields, ['Mensagem', message]].map(([label, value]) => `${label}: ${value}`).join('\n\n')}`,
    html: `<!DOCTYPE html>
<html lang="pt-BR" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Novo contato — Mundpay</title>
    <style>
      @media only screen and (max-width: 600px) {
        .email-padding { padding: 16px 8px !important; }
        .card-padding { padding: 24px 20px !important; }
        .field-label, .field-value { display: block !important; width: auto !important; }
        .field-label { padding-bottom: 3px !important; border-bottom: 0 !important; }
        .field-value { padding-top: 0 !important; }
      }
    </style>
  </head>
  <body style="margin:0;padding:0;background-color:#F2F4ED;font-family:Arial,Helvetica,sans-serif;color:#11160B;-webkit-text-size-adjust:100%">
    <table role="presentation" lang="pt-BR" dir="ltr" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F2F4ED">
      <tr>
        <td class="email-padding" align="center" style="padding:40px 16px">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background-color:#FFFFFF;border:1px solid #DDE2D3;border-radius:16px;border-spacing:0;overflow:hidden">
            <tr>
              <td class="card-padding" style="padding:28px 32px;background-color:#050700;border-top:4px solid #A2D035">
                <p style="margin:0;color:#EAEEE4;font-size:24px;line-height:30px;font-weight:700;letter-spacing:-1px">Mundpay</p>
                <p style="margin:8px 0 0;color:#C5CDB8;font-size:11px;line-height:16px;letter-spacing:1.5px;text-transform:uppercase">Novo contato pelo site</p>
              </td>
            </tr>
            <tr>
              <td class="card-padding" style="padding:32px">
                <h1 style="margin:0 0 10px;font-size:26px;line-height:34px;letter-spacing:-0.6px;color:#11160B">Novo contato recebido</h1>
                <p style="margin:0 0 28px;font-size:15px;line-height:24px;color:#5E6554">${origin}</p>

                <h2 style="margin:0 0 8px;font-size:12px;line-height:18px;letter-spacing:1px;text-transform:uppercase;color:#5E6554">Dados do contato</h2>
                <table aria-label="Dados do contato" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;table-layout:fixed">
                  ${fields.map(([label, value]) => `<tr>
                    <th class="field-label" scope="row" width="40%" style="width:40%;padding:12px 16px 12px 0;border-bottom:1px solid #E8ECDF;text-align:left;vertical-align:top;font-size:13px;line-height:21px;font-weight:400;color:#5E6554">${label}</th>
                    <td class="field-value" style="padding:12px 0;border-bottom:1px solid #E8ECDF;text-align:left;vertical-align:top;font-size:14px;line-height:21px;font-weight:600;color:#11160B;word-break:break-word;overflow-wrap:anywhere">${escapeHtml(value)}</td>
                  </tr>`).join('\n')}
                </table>

                <h2 style="margin:28px 0 12px;font-size:12px;line-height:18px;letter-spacing:1px;text-transform:uppercase;color:#5E6554">Mensagem</h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F5F7F0;border-left:3px solid #A2D035">
                  <tr>
                    <td style="padding:18px 20px;font-size:15px;line-height:25px;color:#11160B;word-break:break-word;overflow-wrap:anywhere">${escapeHtml(message).replace(/\n/g, '<br>')}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="card-padding" style="padding:20px 32px;border-top:1px solid #E8ECDF;background-color:#FAFBF7">
                <p style="margin:0;font-size:12px;line-height:20px;color:#5E6554">Mundpay · Notificação de contato</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
  };
}
