import { LegalDocument } from "../LegalDocument";
import { LegalLayout } from "../LegalLayout";

export function AmlPoliciesPage() {
  return (
    <LegalLayout>
      <LegalDocument>
        <h1>MundPay's Anti-Money Laundering Policies</h1>
        <h2>1. Introduction</h2>
        <p>
          MundPay is committed to combating money laundering and terrorist
          financing in compliance with applicable laws and regulations. These
          policies have been developed to establish clear guidelines and
          procedures for identifying, reporting, and preventing suspicious money
          laundering activities.
        </p>
        <h2>2. Know Your Customer (KYC)</h2>
        <ul>
          <li>
            <p>
              MundPay has implemented robust “Know Your Customer” procedures to
              verify the identity and legitimacy of all customers.
            </p>
          </li>
          <li>
            <p>
              All customers will be required to provide valid identification
              documentation and detailed information regarding the nature of
              their transactions.
            </p>
          </li>
        </ul>
        <h2>3. Transaction Monitoring</h2>
        <ul>
          <li>
            <p>
              MundPay will conduct continuous monitoring of transactions to
              identify patterns of suspicious or unusual activity.
            </p>
          </li>
          <li>
            <p>
              Transactions that lack a legitimate commercial rationale will be
              further investigated.
            </p>
          </li>
        </ul>
        <h2>4. Reporting Suspicious Transactions</h2>
        <ul>
          <li>
            <p>
              All employees will be trained to recognize signs of suspicious
              money laundering activity.
            </p>
          </li>
          <li>
            <p>
              Any transaction that raises suspicions will be reported to
              MundPay's compliance department for further analysis and, if
              necessary, reporting to the competent authorities.
            </p>
          </li>
        </ul>
        <h2>5. Due Diligence on Business Partners</h2>
        <ul>
          <li>
            <p>
              MundPay will conduct due diligence on business partners, including
              banks, financial institutions, and payment service providers, to
              ensure that they also maintain high standards of anti-money
              laundering measures.
            </p>
          </li>
        </ul>
        <h2>6. Training and Education</h2>
        <ul>
          <li>
            <p>
              All employees will receive regular training on anti-money
              laundering issues and will be informed of their responsibilities
              in detecting and reporting suspicious activities.
            </p>
          </li>
          <li>
            <p>
              The training will be updated regularly to reflect changes in
              relevant laws and regulations.
            </p>
          </li>
        </ul>
        <h2>7. Audits and Regular Reviews</h2>
        <ul>
          <li>
            <p>
              The effectiveness of the anti-money laundering policies and
              procedures will be regularly reviewed through internal and
              external audits.
            </p>
          </li>
          <li>
            <p>
              The policies will be adjusted as necessary to ensure ongoing
              compliance with regulatory requirements.
            </p>
          </li>
        </ul>
        <h2>8. Consequences of Violations</h2>
        <ul>
          <li>
            <p>
              Violations of the anti-money laundering policies will be taken
              seriously and may result in disciplinary action, including
              termination and reporting to the competent authorities, if
              necessary.
            </p>
          </li>
        </ul>
        <h2>9. Review and Update of Policies</h2>
        <ul>
          <li>
            <p>
              These policies will be reviewed and updated as necessary to ensure
              their ongoing effectiveness in light of changes in the regulatory
              environment and industry best practices.
            </p>
          </li>
        </ul>
        <p>
          These policies reflect MundPay's commitment to fulfilling its legal
          obligations and protecting the integrity of its financial system
          against criminal activities.
        </p>
      </LegalDocument>
    </LegalLayout>
  );
}
