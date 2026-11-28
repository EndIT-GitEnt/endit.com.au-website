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
      <LegalSection title="1. Who this policy covers">
        <p>
          Mini Rent Ledger is an offline record-keeping app by End iT for small landlords and people
          who manage rental records on their behalf. This policy covers the way the app handles
          those records and the information you choose to share with End iT about the app.
        </p>
        <p>
          If your details appear in a landlord’s ledger, the person responsible for that ledger
          controls the records they enter and any copies they make.
        </p>
      </LegalSection>
      <LegalSection title="2. How the app handles your ledger">
        <p>
          Your ledger is saved in the app’s local database on the device you use. You can enter,
          view and update rental records without an internet connection or an End iT account. End iT
          does not receive or access the ledger through normal use of the app.
        </p>
        <p>
          The app has no End iT server sync, advertising or analytics. The app does not
          automatically send crash reports or support diagnostics to End iT.
        </p>
      </LegalSection>
      <LegalSection title="3. Information stored on your device">
        <p>Depending on what you enter and which features you use, the app may store:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your workspace name and property, room or unit descriptions and addresses.</li>
          <li>Tenant names, contact details, emergency contact details and notes.</li>
          <li>
            Tenancy dates and terms, agreed rent and the expected rent periods calculated from your
            entries.
          </li>
          <li>
            Rent and bond records, including amounts, dates, payment methods and reference details
            you enter.
          </li>
          <li>Expenses, including descriptions, categories, dates and amounts.</li>
          <li>
            Record statuses, internal identifiers, links between records, timestamps and change
            history.
          </li>
        </ul>
        <p>
          The app uses this information to organise your records, display rent periods and balances,
          and retain the history needed to understand changes. Those calculations reflect the
          entries and settings in the ledger.
        </p>
      </LegalSection>
      <LegalSection title="4. Access to the device">
        <p>
          Access to the ledger depends on who can use your device and open the app. Use the device’s
          security controls, keep access limited to authorised people, and take care when someone
          else uses your phone or tablet. Keep separate copies, including backup files, under the
          same care as the ledger itself.
        </p>
      </LegalSection>
      <LegalSection title="5. Manual backup files">
        <p>
          In Settings you can create an <code>.mrlbackup</code> file and choose where to save it.
          The file includes the ledger, including rental and contact information and saved record
          history. Its contents are readable to anyone who can access the file. The app checks
          backup integrity when opening a file. Use the destination and access controls to protect
          the contents.
        </p>
        <p>
          A local destination can be used offline. You can also choose a file provider offered by
          your device. That provider may store or synchronise the file under its own privacy
          practices. If you move or share a backup, the copy is handled by the destination or
          recipient you choose.
        </p>
      </LegalSection>
      <LegalSection title="6. Restoring your ledger">
        <p>
          You can select a backup to restore in Settings or during first setup. The app checks
          compatibility and validity and shows a preview before replacing the ledger. If a ledger
          already exists, the app asks you to save a safety copy and confirm the replacement.
        </p>
        <p>
          End iT does not operate an automatic cloud backup service for Mini Rent Ledger. End iT has
          no server copy it can use to restore records from a lost, reset or replaced device.
        </p>
      </LegalSection>
      <LegalSection title="7. Operating-system backup and transfer">
        <p>
          Android is configured to disable system backup for the app and, on Android 12 and later,
          apply exclusion rules for cloud backup and device transfer. On iOS, the app requests
          exclusion of the private directory containing the live ledger from operating-system backup
          on launch. The platform controls how it handles that request.
        </p>
        <p>
          On an iOS upgrade, the app first requests the exclusion when the updated app launches.
          Older backups may still exist. Copies you save or transfer yourself are separate from the
          live ledger and follow the rules of their destination.
        </p>
      </LegalSection>
      <LegalSection title="8. Information sent to End iT for support">
        <p>
          If you email End iT, we receive your email address and the details or attachments you
          send. We use what you share to respond, investigate the issue and manage your request.
        </p>
        <p>
          Describe the problem and send only what helps explain it. Before sending a screenshot,
          remove tenant details, addresses and payment information. If you need help understanding
          what a backup contains, contact us without attaching the file.
        </p>
      </LegalSection>
      <LegalSection title="9. Support Diagnostics">
        <p>
          Support Diagnostics generates a read-only report on your device. The report can include
          the app version, platform, time of the check, record counts, and technical identifiers or
          relationships related to an integrity issue. It leaves out names, contact details,
          addresses, amounts and notes entered in the ledger.
        </p>
        <p>
          You can read the report in the app and choose <strong>Copy diagnostics</strong>. Copying
          puts it on the device’s clipboard. End iT receives the copied information only if you
          choose to send it. Review the report before including it in a support message.
        </p>
      </LegalSection>
      <LegalSection title="10. Corrections, history and separate copies">
        <p>
          The person managing a ledger can correct entries using the app’s available controls.
          Corrections, archiving and some removal actions keep previous information in the ledger’s
          history. For example, removing an expense from the active list does not erase its record
          history.
        </p>
        <p>
          A backup reflects the ledger at the time the file was created. Changes on the device do
          not update or delete files already saved elsewhere. You control those files and who can
          access them.
        </p>
      </LegalSection>
      <LegalSection title="11. Access, correction and privacy concerns">
        <p>
          If you want to access or correct personal information in a landlord’s ledger, contact the
          person responsible for that ledger. End iT cannot retrieve those records through the app.
        </p>
        <p>
          Email{" "}
          <a className={legalLinkClass} href="mailto:support@endit.com.au">
            support@endit.com.au
          </a>{" "}
          to request access to or correction of information End iT holds about you, or to raise a
          privacy concern. Explain what you are asking about so we can review your request and
          respond using the contact details you provide.
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
      <LegalSection title="12. Policy updates">
        <p>
          The update date at the top of this page identifies the current published version. Contact
          End iT if you have a question about this policy or how Mini Rent Ledger handles your
          records.
        </p>
      </LegalSection>
    </MiniRentLedgerLegalPage>
  );
}
