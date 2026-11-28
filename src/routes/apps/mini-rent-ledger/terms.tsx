import { createFileRoute } from "@tanstack/react-router";
import {
  LegalSection,
  MiniRentLedgerLegalPage,
  legalLinkClass,
} from "../../../components/MiniRentLedgerLegalPage";

const title = "Terms of Use — Mini Rent Ledger — End iT";
const description =
  "These Terms of Use apply to Mini Rent Ledger, an app by End iT for small landlords and people who manage rental records on their behalf.";
const canonicalUrl = "https://endit.com.au/apps/mini-rent-ledger/terms";

export const Route = createFileRoute("/apps/mini-rent-ledger/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: MiniRentLedgerTermsPage,
});

function MiniRentLedgerTermsPage() {
  return (
    <MiniRentLedgerLegalPage
      title="Terms of Use"
      related={{ href: "/apps/mini-rent-ledger/privacy", label: "Privacy Policy" }}
    >
      <p>
        These Terms of Use apply to Mini Rent Ledger, an app by End iT for small landlords and
        people who manage rental records on their behalf.
      </p>
      <LegalSection title="1. Using the app">
        <p>
          You may use Mini Rent Ledger to keep rental records you are authorised to manage. If you
          use it for another person or an organisation, make sure you have their authority to record
          and handle that information.
        </p>
        <p>
          Only enter or share personal information where you have permission or another lawful basis
          to do so. Follow the obligations that apply to your tenancy arrangements and to the people
          whose information you record.
        </p>
      </LegalSection>
      <LegalSection title="2. What Mini Rent Ledger does">
        <p>
          The app helps you organise properties, rooms or units, tenants and tenancies. It uses the
          dates and rent rules you enter to calculate expected rent periods. You can also record
          rent payments, bond amounts and collections, and expenses. The app keeps those types of
          records distinct.
        </p>
        <p>
          Recording a payment or a bond collection creates a record on your device. It does not
          transfer money, collect rent, deposit a bond or verify that a transaction occurred.
        </p>
      </LegalSection>
      <LegalSection title="3. Checking amounts and dates">
        <p>
          The ledger’s dates, balances and status indicators depend on the entries and settings in
          the app. Check the tenancy dates, rent frequency, rent amount and payment allocation
          against your agreements and source records. When an entry is wrong, use the available
          correction controls and check the resulting record and totals.
        </p>
        <p>
          Check your source records before issuing a receipt or statement, telling a tenant that an
          amount is overdue, lodging a bond, or relying on a balance in a dispute. Keep any
          independent records you need to substantiate what happened.
        </p>
      </LegalSection>
      <LegalSection title="4. Rental decisions and professional advice">
        <p>
          Mini Rent Ledger assists with record keeping. It does not decide what is legally owed,
          whether a debt is enforceable, whether a tenancy requirement has been met, or how an
          amount should be treated for tax or accounting purposes.
        </p>
        <p>
          Use your agreements, source records and applicable requirements to make decisions about
          rent, bonds and tenancies. Seek appropriate professional advice if you need help with a
          legal, tax or accounting question.
        </p>
      </LegalSection>
      <LegalSection title="5. Local records and device access">
        <p>
          Your ledger is held on the device you use. Mini Rent Ledger has no End iT account or
          server sync. If someone else can use your device and open the app, they may be able to see
          the ledger. Use your device’s security controls and limit access to authorised people.
        </p>
        <p>End iT does not keep a server copy of your ledger for recovery.</p>
      </LegalSection>
      <LegalSection title="6. Making and protecting backup copies">
        <p>
          In Settings you can create a backup file and choose where to save it. If you need to keep
          your records, store a usable backup somewhere you can access if the device is lost or
          replaced. A backup file contains readable rental and contact information. Keep it secure
          and share it only with authorised recipients.
        </p>
        <p>
          A backup is a copy of the ledger as it was when you created the file. A later backup is
          needed to capture changes made after you created that file.
        </p>
      </LegalSection>
      <LegalSection title="7. Replacing a ledger from backup">
        <p>
          You can select a compatible backup file in Settings or during setup. Review the preview
          and make sure you selected the intended file for the receiving device. Restoring replaces
          the whole ledger. If there are existing records, the app asks you to save a safety copy
          and confirm the replacement.
        </p>
        <p>
          Keep the safety copy if you might need the previous records. Availability of a backup
          depends on where you stored it and whether you can still access the file.
        </p>
      </LegalSection>
      <LegalSection title="8. Record changes and history">
        <p>
          The app can retain history when you correct an entry, archive a record or remove it from
          an active view. Check any history you need before replacing the ledger. If you have duties
          to retain or delete particular records, manage those duties for both the live ledger and
          any copied files.
        </p>
      </LegalSection>
      <LegalSection title="9. App versions and distribution">
        <p>
          If you obtain the app through a store or another distribution service, that service may
          have its own terms. Check that you have a compatible device and app version before opening
          an older backup or moving your ledger to another device.
        </p>
        <p>
          Before replacing, resetting or removing the app, save a backup if you need the records.
          Copies you saved separately remain your responsibility.
        </p>
      </LegalSection>
      <LegalSection title="10. Services you choose to use">
        <p>
          If you select a third-party file provider or use another service to store or share a
          backup, that service’s own terms apply to its handling of the file. The receiving app,
          provider or recipient may retain its own copy. Check access to the destination before
          sending it rental or contact records.
        </p>
      </LegalSection>
      <LegalSection title="11. Privacy and support">
        <p>
          The{" "}
          <a className={legalLinkClass} href="/apps/mini-rent-ledger/privacy">
            Mini Rent Ledger Privacy Policy
          </a>{" "}
          explains how the app handles records and what End iT receives when you contact support.
        </p>
        <p>
          See{" "}
          <a className={legalLinkClass} href="/apps/mini-rent-ledger/support">
            Mini Rent Ledger Support
          </a>{" "}
          or email{" "}
          <a className={legalLinkClass} href="mailto:support@endit.com.au">
            support@endit.com.au
          </a>{" "}
          for help. Describe the issue and share only the information needed to explain it. Support
          Diagnostics can be reviewed on your device before you choose to copy or send anything.
        </p>
      </LegalSection>
      <LegalSection title="12. Consumer rights">
        <p>
          Nothing in these terms excludes, restricts or modifies rights, remedies or consumer
          guarantees that cannot lawfully be excluded, restricted or modified, including under the
          Australian Consumer Law where it applies.
        </p>
      </LegalSection>
      <LegalSection title="13. Contact and current version">
        <p>
          The update date at the top of this page identifies the published version of these terms.
          Contact End iT using the details on this page if you have a question about the app or
          these terms.
        </p>
      </LegalSection>
    </MiniRentLedgerLegalPage>
  );
}
