import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

export function PaymentsFeesPage() {
  return (
    <LegalLayout>
      <LegalDocument>
        <h1>Payments and Fees</h1>
        <h2>Payments</h2>
        <p>
          MundPay offers a variety of payment methods, including credit cards,
          debit cards, and bank transfers, to provide the best possible
          experience for our users. However, the availability of specific
          payment methods may vary depending on some factors, such as your
          location or the nature of the transaction.
        </p>
        <h2>Transaction Fees</h2>
        <p>
          To fund the provision of our services, MundPay charges transaction
          fees detailed in our fee policy. Please note that these fees are
          applied to each transaction made on our platform and are automatically
          deducted from the transaction amount.
        </p>
        <h2>Refund Policy</h2>
        <p>
          MundPay understands that circumstances may change and, in certain
          cases, a refund may be necessary. Our refund policy is designed to be
          fair to both you and the info producers. However, the right to request
          a refund may be limited or excluded under certain circumstances.
        </p>
        <h2>Payment Disputes</h2>
        <p>
          If you have any issues with a transaction, MundPay offers a dispute
          process to help you resolve the issue. However, by using our platform,
          you agree to first contact us to try to resolve the dispute before
          reaching out to your payment provider or bank.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions, suggestions, or need more information about
          our Payments and Fees terms, please do not hesitate to contact us at
          support@mundpay.com. We are always ready to assist you.
        </p>
      </LegalDocument>
    </LegalLayout>
  );
}
