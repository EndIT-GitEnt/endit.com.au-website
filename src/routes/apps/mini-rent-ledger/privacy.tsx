import { createFileRoute } from "@tanstack/react-router";
import {
  LegalSection,
  MiniRentLedgerLegalPage,
  legalLinkClass,
} from "../../../components/MiniRentLedgerLegalPage";

const title = "Privacy Policy — Mini Rent Ledger — End iT";
const description =
  "This Privacy Policy explains how Mini Rent Ledger handles the rental records you enter and what End iT receives when you contact support.";
const canonicalUrl = "https://endit.com.au/apps/mini-rent-ledger/privacy";

export const Route = createFileRoute("/apps/mini-rent-ledger/privacy")({
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
  component: MiniRentLedgerPrivacyPage,
});

function MiniRentLedgerPrivacyPage() {
  return (
    <MiniRentLedgerLegalPage
      title="Privacy Policy"
      related={{ href: "/apps/mini-rent-ledger/terms", label: "Terms of Use" }}
    >
      <p>
        This Privacy Policy explains how Mini Rent Ledger handles the rental records you enter and
        what End iT receives when you contact support.
      </p>
      <LegalSection title="Information stored by the app">
        <p>
          Mini Rent Ledger works offline. Its ledger stays on your device during normal use. End iT
          does not receive or access that ledger through the app.
        </p>
        <p>
          The ledger may contain workspace and property details, addresses, tenant and emergency
          contact details, tenancy dates and terms, rent and bond records, expenses, notes and
          record history. Mini Rent Ledger does not require an End iT account or send analytics,
          advertising data or diagnostic reports to End iT automatically.
        </p>
      </LegalSection>
      <LegalSection title="Backups, restores and transfers">
        <p>
          You can create a backup file from Settings and choose where to save it. The file contains
          readable rental and contact information. Keep it somewhere you trust. A file provider you
          choose may store or synchronise the file under its own privacy practices.
        </p>
        <p>
          A restore replaces the ledger on the receiving device. When a ledger already exists, the
          app asks you to save a safety copy and confirm the replacement. End iT does not run an
          automatic cloud backup service for the app or keep a copy it can use to recover your
          ledger.
        </p>
        <p>
          The app is configured to exclude the live ledger from operating-system backups where the
          platform supports the exclusion. Backups made before those protections took effect can
          still exist. Manual copies and other files you choose to transfer remain subject to the
          destination you selected.
        </p>
      </LegalSection>
      <LegalSection title="Information you share with support">
        <p>
          If you contact us, we receive your email address and any information or attachments you
          choose to send. We use that information to respond, investigate the issue and manage your
          request.
        </p>
        <p>
          Support Diagnostics generates a report on your device. You can review it and choose to
          copy it. It can include app and platform details, record counts and technical identifiers.
          It excludes personal details you entered in the ledger, such as names and contact
          information, as well as amounts and notes. Review what you share, especially when sending
          screenshots or files.
        </p>
      </LegalSection>
      <LegalSection title="Access, correction and complaints">
        <p>
          If your information is in a landlord’s ledger, contact the person responsible for that
          ledger to ask about access or correction. Email{" "}
          <a className={legalLinkClass} href="mailto:support@endit.com.au">
            support@endit.com.au
          </a>{" "}
          to request access to or correction of information End iT holds about you, or to raise a
          privacy concern. We will review your request and respond using the contact details you
          provide.
        </p>
        <p>
          If the matter remains unresolved and the Office of the Australian Information Commissioner
          can handle it, you can contact that office.{" "}
          <a
            className={legalLinkClass}
            href="https://www.oaic.gov.au/privacy/privacy-complaints/lodge-a-privacy-complaint-with-us"
          >
            OAIC privacy complaints
          </a>
        </p>
      </LegalSection>
    </MiniRentLedgerLegalPage>
  );
}
