import { Trans, useTranslation } from "react-i18next";

const picpayChannels = [
  { key: "chat" },
  { key: "customerService", href: "tel:08000258000" },
  { key: "ombudsman", href: "tel:08000252000" },
  { key: "helpCenter", href: "https://meajuda.picpay.com/hc/pt-br" },
  { key: "ombudsmanForm", href: "https://picpay.com/pt-br/ouvidoria" },
] as const;

export function ReportingPaymentSupport() {
  const { t } = useTranslation(undefined, {
    keyPrefix: "legal.pages.reportingChannel",
  });

  return (
    <>
      <section>
        <h2>{t("questions.title")}</h2>
        <p>{t("questions.description")}</p>
      </section>
      <section>
        <h2>{t("picpay.title")}</h2>
        <p>{t("picpay.description")}</p>
        <ul>
          {picpayChannels.map((channel) => {
            const href = "href" in channel ? channel.href : undefined;

            return (
              <li key={channel.key}>
                <p>
                  <Trans
                    i18nKey={`legal.pages.reportingChannel.picpay.channels.${channel.key}`}
                    values={{ url: href }}
                    components={{
                      strong: <strong />,
                      phone: <a href={href} />,
                      resourceLink: <a href={href} className="break-words" />,
                    }}
                  />
                </p>
              </li>
            );
          })}
        </ul>
        <p>{t("picpay.support")}</p>
      </section>
    </>
  );
}
