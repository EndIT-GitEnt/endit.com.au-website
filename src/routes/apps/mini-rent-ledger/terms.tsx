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
      <LegalSection title="Using Mini Rent Ledger">
        <p>
          You may use the app to manage rental records you are authorised to keep. Only enter or
          share information you have permission or another lawful basis to handle. Follow any
          obligations that apply to your tenancy arrangements and to the people whose information
          you record.
        </p>
        <p>
          The app helps you record rent, bonds and expenses. Recording a payment does not transfer
          money. The app’s totals and dates are based on the records and settings you enter. Check
          them before relying on them for a receipt, statement, claim or other decision. Use your
          lease, source records and applicable requirements to determine what is owed. Seek
          appropriate professional advice for legal, tax or accounting questions.
        </p>
      </LegalSection>
      <LegalSection title="Your records and copies">
        <p>
          Your ledger is held on your device. Keep the device and any backup files secure. If you
          need to preserve records, create a backup in Settings and store it somewhere you can
          access if you replace or lose the device. Backup files contain readable rental and contact
          information.
        </p>
        <p>
          Restoring a file replaces the current ledger. Review the restore preview and keep the
          safety copy if you may need to recover the previous records. End iT does not keep a server
          copy of your ledger for recovery.
        </p>
      </LegalSection>
      <LegalSection title="Distribution and support">
        <p>
          The store or other service you use to get the app may have its own terms for that service.
          If you save or share a backup through another provider, its service terms apply to that
          file handling.
        </p>
        <p>
          Contact{" "}
          <a className={legalLinkClass} href="mailto:support@endit.com.au">
            support@endit.com.au
          </a>{" "}
          for help with Mini Rent Ledger. Describe the issue and share only the information needed
          to explain it.
        </p>
      </LegalSection>
      <LegalSection title="Consumer rights">
        <p>
          Nothing in these terms excludes, restricts or modifies rights, remedies or consumer
          guarantees that cannot lawfully be excluded, restricted or modified, including under the
          Australian Consumer Law where it applies.
        </p>
      </LegalSection>
    </MiniRentLedgerLegalPage>
  );
}
