import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";

export const Route = createFileRoute("/apps/pocket-key-manager/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pocket Key Manager — End iT" },
      {
        name: "description",
        content:
          "Privacy Policy for Pocket Key Manager by End iT. Offline-first app — End iT does not collect, receive, or access your operational data.",
      },
      {
        property: "og:title",
        content: "Privacy Policy — Pocket Key Manager — End iT",
      },
      {
        property: "og:description",
        content: "Privacy Policy for Pocket Key Manager by End iT.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://endit.com.au/apps/pocket-key-manager/privacy",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://endit.com.au/apps/pocket-key-manager/privacy",
      },
    ],
  }),
  component: PKMPrivacyPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-[#f5f5f5]">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">{children}</div>
    </section>
  );
}

const emailLink = (
  <a href="mailto:support@endit.com.au" className="text-[#fbbf24] underline underline-offset-4">
    support@endit.com.au
  </a>
);

const privacyLink = (
  <a
    href="https://endit.com.au/apps/pocket-key-manager/privacy"
    className="text-[#fbbf24] underline underline-offset-4"
  >
    https://endit.com.au/apps/pocket-key-manager/privacy
  </a>
);

function PKMPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 border-b border-[#1e1e1e] pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight">Privacy Policy</h1>
          <div className="mt-4 space-y-0.5 text-sm text-[#f5f5f5]/45">
            <p>Pocket Key Manager</p>
            <p>Publisher: End iT</p>
            <p>ABN: 62 445 871 758</p>
            <p>
              Website:{" "}
              <a
                href="https://endit.com.au"
                className="text-[#fbbf24]/70 underline underline-offset-4"
              >
                https://endit.com.au
              </a>
            </p>
            <p>
              Privacy Policy URL:{" "}
              <a
                href="https://endit.com.au/apps/pocket-key-manager/privacy"
                className="text-[#fbbf24]/70 underline underline-offset-4"
              >
                https://endit.com.au/apps/pocket-key-manager/privacy
              </a>
            </p>
            <p>Support: {emailLink}</p>
            <p>Postal address: PO Box 1188, South Perth WA 6151, Australia</p>
            <p>Last updated: 15 June 2026</p>
          </div>
        </div>

        <div className="space-y-10">
          <Section title="1. Overview">
            <p>
              Pocket Key Manager is an offline-first mobile app for managing physical keys in
              mining, industrial, workplace, and organisational environments.
            </p>
            <p>The app helps users and organisations record and manage:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>physical key copies;</li>
              <li>key profiles and access patterns;</li>
              <li>locks and lock access;</li>
              <li>people and key holders;</li>
              <li>bookings;</li>
              <li>key issue and return workflows;</li>
              <li>damaged, lost, recovered, repaired, and retired key states;</li>
              <li>audit logs;</li>
              <li>backup and restore files.</li>
            </ul>
            <p>Pocket Key Manager is designed to operate locally on the user's device.</p>
            <p>End iT does not operate a backend server for Pocket Key Manager.</p>
            <p>
              End iT does not collect, receive, access, sell, analyse, track, or transmit the
              operational data entered into the app.
            </p>
            <p>
              However, the app itself may store operational data locally on the user's device.
              Depending on how the app is used, that local data may include personal information and
              sensitive operational information.
            </p>
            <p>
              This Privacy Policy explains what the app stores locally, what End iT does and does
              not receive, and what users and organisations are responsible for.
            </p>
          </Section>

          <Section title="2. Who this policy applies to">
            <p>
              This Privacy Policy applies to users of the Pocket Key Manager mobile app on Android
              and iOS.
            </p>
            <p>
              The app is intended for organisational, workplace, mining, industrial, and business
              use. It is not intended as a consumer social app.
            </p>
            <p>
              Where the app is used by an organisation, that organisation is responsible for
              deciding what information is entered into the app, who is allowed to access it, and
              how the information is managed under the organisation's own policies and legal
              obligations.
            </p>
          </Section>

          <Section title="3. Local-only and offline-first design">
            <p>
              Pocket Key Manager is designed to work offline and store app data locally on the
              device.
            </p>
            <p>End iT does not provide:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>cloud sync;</li>
              <li>hosted databases;</li>
              <li>user accounts;</li>
              <li>server-side app data processing;</li>
              <li>analytics dashboards;</li>
              <li>advertising services;</li>
              <li>third-party tracking;</li>
              <li>remote monitoring;</li>
              <li>remote access to customer data.</li>
            </ul>
            <p>
              End iT does not receive the app's local database or backup files unless a user or
              organisation chooses to send information to End iT, such as by emailing support with
              screenshots, files, or exported backup data.
            </p>
          </Section>

          <Section title="4. Data stored locally in the app">
            <p>
              Pocket Key Manager may store operational data entered by the user or organisation on
              the device.
            </p>
            <p>This may include:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>physical key copy records;</li>
              <li>key profile and access pattern records;</li>
              <li>lock records;</li>
              <li>lock access records;</li>
              <li>names or identifiers of key holders;</li>
              <li>employee, contractor, visitor, or personnel references entered by the user;</li>
              <li>booking records;</li>
              <li>key issue records;</li>
              <li>key return records;</li>
              <li>lost key records;</li>
              <li>damaged key records;</li>
              <li>recovered key records;</li>
              <li>repaired key records;</li>
              <li>retired key records;</li>
              <li>audit logs and activity history;</li>
              <li>app settings;</li>
              <li>backup and restore records;</li>
              <li>exported backup files created by the user.</li>
            </ul>
            <p>
              This information may be sensitive operational information. It may also include
              personal information if names, identifiers, contact details, employment details, or
              other information about people are entered into the app.
            </p>
          </Section>

          <Section title="5. Data End iT does not collect from the app">
            <p>End iT does not collect or receive the following from Pocket Key Manager:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>app database contents;</li>
              <li>key holder names;</li>
              <li>employee or contractor records;</li>
              <li>physical key records;</li>
              <li>lock records;</li>
              <li>lock access records;</li>
              <li>booking records;</li>
              <li>issue and return records;</li>
              <li>audit logs;</li>
              <li>backup files;</li>
              <li>PINs;</li>
              <li>biometric data;</li>
              <li>analytics events;</li>
              <li>advertising identifiers;</li>
              <li>location tracking data;</li>
              <li>usage tracking data;</li>
              <li>account profile data;</li>
              <li>cloud sync data.</li>
            </ul>
            <p>
              The app does not include analytics, advertising, third-party tracking, cloud sync,
              app accounts, or server-side operational data processing.
            </p>
          </Section>

          <Section title="6. Local database storage">
            <p>
              Pocket Key Manager stores app data locally on the device using a local database, such
              as SQLite/Drift.
            </p>
            <p>
              Because the data is stored locally, End iT cannot view it, recover it, remotely
              delete it, remotely edit it, or transfer it between devices.
            </p>
            <p>
              Users and organisations are responsible for protecting the device where the app is
              installed.
            </p>
            <p>
              This includes using appropriate safeguards such as device passcodes, device
              encryption, operating system updates, access controls, mobile device management, and
              workplace security policies.
            </p>
          </Section>

          <Section title="7. PIN and biometric unlock">
            <p>
              Pocket Key Manager may provide local app access protection using a PIN and/or
              biometric unlock.
            </p>
            <p>PIN security uses salted hash storage. The app is not designed to store the plain text PIN.</p>
            <p>
              Biometric unlock uses the device operating system's biometric system, such as Face
              ID, Touch ID, fingerprint unlock, or the Android biometric system.
            </p>
            <p>
              Pocket Key Manager does not receive or store the user's actual fingerprint, face
              scan, biometric template, or biometric identity data.
            </p>
            <p>
              PIN and biometric unlock can help protect local access to the app. They do not
              replace proper organisational key-control policies, workplace access procedures,
              device security controls, staff authorisation checks, audit procedures, incident
              reporting, or physical key security measures.
            </p>
          </Section>

          <Section title="8. Backup, export, import, and sharing">
            <p>Pocket Key Manager may allow users to export, import, or share backup files.</p>
            <p>Exported backup files may contain sensitive operational data, including:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>key records;</li>
              <li>lock records;</li>
              <li>lock access records;</li>
              <li>key holder names or identifiers;</li>
              <li>booking records;</li>
              <li>issue and return history;</li>
              <li>damaged key records;</li>
              <li>lost key records;</li>
              <li>recovered key records;</li>
              <li>repaired key records;</li>
              <li>retired key records;</li>
              <li>audit logs.</li>
            </ul>
            <p>
              Users and organisations are responsible for where backup files are saved, copied,
              emailed, uploaded, stored, imported, restored, or shared.
            </p>
            <p>
              End iT does not control third-party storage locations or sharing destinations chosen
              by the user, such as email apps, messaging apps, cloud drives, file managers,
              workplace systems, removable storage, or other apps.
            </p>
            <p>
              Before exporting, storing, or sharing a backup file, users should consider whether
              the file contains sensitive information and whether the destination is authorised by
              their organisation.
            </p>
          </Section>

          <Section title="9. File picker and share features">
            <p>
              Pocket Key Manager may use operating system file picker and share features so the
              user can choose files to import, export, or share.
            </p>
            <p>These actions are user-controlled.</p>
            <p>The app does not automatically upload app data to End iT.</p>
            <p>
              When a user chooses to share a file with another app or service, that other app or
              service may process the file under its own terms and privacy policy.
            </p>
            <p>
              End iT is not responsible for third-party apps, cloud drives, email services,
              storage providers, messaging services, file managers, or sharing destinations selected
              by the user.
            </p>
          </Section>

          <Section title="10. Device, operating system, and third-party services">
            <p>Pocket Key Manager runs on Android and iOS devices.</p>
            <p>
              Apple, Google, device manufacturers, operating systems, app stores, cloud backup
              services, email apps, file managers, and other third-party services may collect or
              process information under their own terms and privacy policies.
            </p>
            <p>
              This Privacy Policy explains End iT's handling of Pocket Key Manager app data. It
              does not control the privacy practices of Apple, Google, device manufacturers, mobile
              carriers, cloud storage providers, email providers, or other third-party services.
            </p>
            <p>
              If a user chooses to store exported files in third-party services, those services are
              responsible for their own handling of that data.
            </p>
          </Section>

          <Section title="11. Support requests">
            <p>
              If a user contacts End iT for support, End iT may receive information the user
              chooses to provide.
            </p>
            <p>This may include:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>the user's email address;</li>
              <li>the contents of the support message;</li>
              <li>screenshots;</li>
              <li>app version information provided by the user;</li>
              <li>device information provided by the user;</li>
              <li>files or exported backup data attached by the user.</li>
            </ul>
            <p>
              Users should not send backup files, screenshots, database exports, or operational
              records to End iT unless they are authorised to do so and understand that those
              materials may contain sensitive operational or personal information.
            </p>
            <p>
              If End iT receives support information, End iT will use it only to respond to the
              support request, troubleshoot the issue, maintain app quality, protect the app, or
              comply with legal obligations.
            </p>
          </Section>

          <Section title="12. Children's privacy">
            <p>Pocket Key Manager is intended for organisational and business use.</p>
            <p>The app is not directed to children.</p>
            <p>
              End iT does not knowingly collect children's personal information through the app.
            </p>
            <p>
              Organisations using the app are responsible for ensuring that any information entered
              into the app is lawful and appropriate for their workplace context.
            </p>
          </Section>

          <Section title="13. Data deletion">
            <p>
              Because Pocket Key Manager stores operational data locally, users and organisations
              can usually delete app data by:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>deleting records inside the app where available;</li>
              <li>deleting exported backup files;</li>
              <li>clearing app data through device settings;</li>
              <li>uninstalling the app;</li>
              <li>wiping or resetting the device;</li>
              <li>using organisational device management tools.</li>
            </ul>
            <p>
              End iT cannot remotely delete local app data because End iT does not host or control
              that data.
            </p>
            <p>
              If a user has sent information to End iT through a support request, they may contact{" "}
              {emailLink} to request deletion of information End iT still holds, subject to any
              legal, security, or operational retention requirements.
            </p>
          </Section>

          <Section title="14. Data security">
            <p>
              Pocket Key Manager includes local access protection features, such as PIN and
              biometric unlock, where enabled.
            </p>
            <p>
              However, no mobile app, device, backup process, file export, or storage method can
              be guaranteed to be completely secure.
            </p>
            <p>Users and organisations should apply appropriate safeguards, including:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>strong device passcodes;</li>
              <li>device encryption where available;</li>
              <li>operating system updates;</li>
              <li>secure storage of backup files;</li>
              <li>restricted access to exported files;</li>
              <li>careful use of email and file-sharing tools;</li>
              <li>secure cloud storage settings where cloud storage is used;</li>
              <li>mobile device management where appropriate;</li>
              <li>staff training;</li>
              <li>workplace key-control procedures;</li>
              <li>regular review of who can access the app, device, and backup files.</li>
            </ul>
          </Section>

          <Section title="15. Organisational responsibility">
            <p>
              Where Pocket Key Manager is used in a workplace or organisational environment, the
              organisation is responsible for:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>deciding what data may be entered into the app;</li>
              <li>informing staff, contractors, visitors, or other relevant people where required;</li>
              <li>obtaining any required consents or authorisations;</li>
              <li>controlling access to the device and app;</li>
              <li>managing backup files;</li>
              <li>enforcing key-control procedures;</li>
              <li>
                complying with privacy, employment, workplace, security, record-keeping, safety,
                and industry obligations that apply to the organisation.
              </li>
            </ul>
            <p>End iT provides Pocket Key Manager as a local record-keeping tool.</p>
            <p>
              End iT does not act as the organisation's hosted database provider, cloud processor,
              key-control officer, security auditor, compliance manager, or workplace safety
              adviser.
            </p>
          </Section>

          <Section title="16. International use">
            <p>
              Pocket Key Manager is designed to store app data locally and does not transmit
              operational app data to End iT servers.
            </p>
            <p>
              If a user chooses to send support information, email attachments, screenshots, or
              backup files to End iT or another service, that information may be processed in
              locations determined by the relevant email, hosting, cloud, app store, or support
              service providers.
            </p>
            <p>
              Users and organisations should not send sensitive operational data outside approved
              systems or jurisdictions unless authorised to do so.
            </p>
          </Section>

          <Section title="17. Changes to this Privacy Policy">
            <p>End iT may update this Privacy Policy from time to time.</p>
            <p>The updated version will be published at: {privacyLink}</p>
            <p>Users should review this Privacy Policy periodically.</p>
            <p>
              Continued use of the app after an updated Privacy Policy is published means the
              updated Privacy Policy applies from the date stated in the policy.
            </p>
          </Section>

          <Section title="18. Contact">
            <p>For privacy or support questions, contact:</p>
            <div className="mt-2 rounded border border-[#1e1e1e] bg-[#111] p-4">
              <p className="font-semibold text-[#f5f5f5]">End iT</p>
              <p>ABN: 62 445 871 758</p>
              <p>PO Box 1188</p>
              <p>South Perth WA 6151</p>
              <p>Australia</p>
              <p>Email: {emailLink}</p>
              <p>
                Website:{" "}
                <a
                  href="https://endit.com.au"
                  className="text-[#fbbf24] underline underline-offset-4"
                >
                  https://endit.com.au
                </a>
              </p>
            </div>
          </Section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
