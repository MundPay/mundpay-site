import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

export function RefundPolicyPage() {
  return (
    <LegalLayout>
      <LegalDocument>
        <h1>Refund and Return Policy</h1>
        <h2>1. Purpose</h2>
        <p>
          This Refund and Return Policy outlines the procedures and conditions
          under which MundPay offers refunds and exchanges for products and
          services purchased through its platform.
        </p>
        <h2>2. Coverage</h2>
        <h3>2.1 Physical Products</h3>
        <ul>
          <li>
            <p>30-day money-back guarantee from the date of purchase.</p>
          </li>
          <li>
            <p>
              To request a refund, customers must return the item in its
              original condition.
            </p>
          </li>
          <li>
            <p>MundPay will provide a shipping address for return.</p>
          </li>
          <li>
            <p>
              Refunds are processed after inspection and confirmation of the
              item's condition.
            </p>
          </li>
        </ul>
        <h3>2.2 Digital Products</h3>
        <ul>
          <li>
            <p>7-day money-back guarantee from the date of purchase.</p>
          </li>
          <li>
            <p>
              Refunds are issued without requiring the return of digital goods.
            </p>
          </li>
          <li>
            <p>
              Processed within 7 days of the request, though bank or card issuer
              delays may apply{" "}
              <a href="https://mundpay.com" rel="noopener">
                mundpay.com
              </a>
              .
            </p>
          </li>
        </ul>
        <h2>3. General Guidelines</h2>
        <ul>
          <li>
            <p>Refunds are issued to the original payment method only.</p>
          </li>
          <li>
            <p>
              Refunds may take 1–2 billing cycles to appear on the customer's
              statement{" "}
              <a href="https://mundpay.com" rel="noopener">
                mundpay.com
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              Some products may have extended refund periods—refer to the
              product’s sales page for details.
            </p>
          </li>
        </ul>
        <h2>4. How to Request a Refund or Return</h2>
        <ol>
          <li>
            <p>
              Contact Mundpay support via email:{" "}
              <a href="mailto:help@mundpay.com.br" rel="noopener">
                help@mundpay.com
              </a>{" "}
            </p>
          </li>
          <li>
            <p>
              Provide purchase details (date, order number, product name, reason
              for refund).
            </p>
          </li>
          <li>
            <p>Physical product requests will include a return address.</p>
          </li>
          <li>
            <p>
              Digital product refunds are processed after verification and
              completed within 7 days.
            </p>
          </li>
          <li>
            <p>MundPay confirms refund completion via email.</p>
          </li>
        </ol>
        <h2>5. Conditions and Exclusions</h2>
        <ul>
          <li>
            <p>
              Physical items must be returned in original packaging and
              condition. Customers are responsible for shipping costs unless
              otherwise stated.
            </p>
          </li>
          <li>
            <p>
              Digital products are refundable only if unused—not accessed,
              downloaded, or consumed.
            </p>
          </li>
          <li>
            <p>Customized or made-to-order products are non-refundable.</p>
          </li>
          <li>
            <p>
              Refund requests after the applicable guarantee window (30 days for
              physical, 7 days for digital) will be evaluated case-by-case at
              MundPay's discretion.
            </p>
          </li>
        </ul>
        <h2>6. Changes to Policy</h2>
        <p>
          MundPay may update this policy at any time to reflect changes in
          operations or regulations. Notice of changes will be provided via
          email and on the website.
          <br />
          This policy remains in effect until replaced.
        </p>
        <h2>7. Contact Information</h2>
        <p>
          Questions or concerns should be directed to:
          <br />
          <a href="mailto:support@mundpay.com.br" rel="noopener">
            help@mundpay.com
          </a>{" "}
          or <a href="/me-ajuda">https://mundpay.com/me-ajuda</a>
        </p>
      </LegalDocument>
    </LegalLayout>
  );
}
