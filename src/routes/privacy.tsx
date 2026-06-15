import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — End iT" },
      {
        name: "description",
        content:
          "Privacy Policy for Pocket Key Manager by End iT. Offline-first app — End iT does not collect, receive, or access your operational data.",
      },
      { property: "og:title", content: "Privacy Policy — End iT" },
      {
        property: "og:description",
        content: "Privacy Policy for Pocket Key Manager by End iT.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/privacy" }],
  }),
  component: PrivacyPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-[#f5f5f5]">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">{children}</div>
    </section>
  );
}

function PrivacyPage() {
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
            <p>Applies to: Pocket Key Manager</p>
            <p>Publisher: End iT (ABN: 62 445 871 758)</p>
            <p>Website: https://endit.com.au</p>
            <p>Last updated: 15 June 2026</p>
          </div>
        </div>

        <div className="space-y-10">
          <Section title="1. About This Policy">
            <p>
              This Privacy Policy explains how End iT (ABN: 62 445 871 758) ("End iT", "we",
              "our", or "us") handles information in connection with the Pocket Key Manager mobile
              application ("the app").
            </p>
            <p>
              Please read this policy carefully. By using the app, you acknowledge that you have
              read and understood it.
            </p>
          </Section>

          <Section title="2. Who We Are">
            <p>End iT is an Australian business (ABN: 62 445 871 758).</p>
            <p>
              Contact:{" "}
              <a
                href="mailto:support@endit.com.au"
                className="text-[#fbbf24] underline underline-offset-4"
              >
                support@endit.com.au
              </a>
              <br />
              PO Box 1188, South Perth WA 6151, Australia
              <br />
              Website:{" "}
              <a
                href="https://endit.com.au"
                className="text-[#fbbf24] underline underline-offset-4"
              >
                https://endit.com.au
              </a>
            </p>
          </Section>

          <Section title="3. The App is Offline-First — No End iT Backend">
            <p>
              Pocket Key Manager is an offline-first application. End iT does not operate a
              backend server, cloud service, or data collection infrastructure for the app.
            </p>
            <p>
              End iT does not collect, receive, access, view, sell, analyse, transmit, or
              otherwise process any operational data entered into the app. We have no mechanism to
              do so — the app does not connect to any End iT server.
            </p>
          </Section>

          <Section title="4. What Data the App Stores Locally">
            <p>
              The app may store the following types of data locally on your device:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Key holder names and personal information</li>
              <li>Physical key copy records and identifiers</li>
              <li>Lock records and access relationships</li>
              <li>Booking records</li>
              <li>Key issue and return records</li>
              <li>Key state history (damaged, lost, recovered, repaired, retired)</li>
              <li>Audit logs</li>
              <li>Backup and export files</li>
            </ul>
            <p>
              This data is stored in the app's local storage on your device. It is not transmitted
              to End iT or to any End iT server.
            </p>
          </Section>

          <Section title="5. How App Data is Protected">
            <p>
              App data is protected by the security controls available on your device, including
              device encryption, screen lock, and app sandboxing provided by the operating system.
              End iT cannot access, view, or modify data stored in the app.
            </p>
            <p>
              You and your organisation are responsible for securing your devices, controlling
              physical and logical access to devices, and maintaining appropriate information
              security practices around the app and its data.
            </p>
          </Section>

          <Section title="6. PIN Protection">
            <p>
              The app includes an optional PIN unlock feature to help protect local app access. If
              you use a PIN:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>The PIN is stored as a salted cryptographic hash, not in plain text.</li>
              <li>The hash is stored locally on the device.</li>
              <li>
                End iT does not receive, store, or have access to your PIN or its hash.
              </li>
            </ul>
            <p>
              The PIN feature provides a first layer of local app access protection. It does not
              replace organisational key-control policies, device security measures, or broader
              information security controls.
            </p>
          </Section>

          <Section title="7. Biometric Unlock">
            <p>
              The app may support biometric unlock (fingerprint or face recognition) as an
              alternative to PIN entry. If you use biometric unlock:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                The app uses the biometric authentication system provided by your device's
                operating system (iOS or Android).
              </li>
              <li>
                The app does not directly access, store, or process your biometric data (such as
                fingerprint templates or face data).
              </li>
              <li>
                Biometric data is managed entirely by the device operating system, subject to your
                device manufacturer's and operating system provider's privacy practices.
              </li>
            </ul>
          </Section>

          <Section title="8. No Analytics or Performance Tracking">
            <p>
              The app does not include any analytics SDK, telemetry library, crash reporter, or
              performance monitoring tool that sends data to End iT or to any third party.
            </p>
          </Section>

          <Section title="9. No Advertising">
            <p>
              The app does not include any advertising SDK, ad network integration, or display
              advertising of any kind.
            </p>
          </Section>

          <Section title="10. No Third-Party Tracking">
            <p>
              The app does not include third-party tracking libraries, social media pixels,
              cross-app tracking tools, or similar technologies.
            </p>
          </Section>

          <Section title="11. No Cloud Sync">
            <p>
              The app does not automatically sync data to any cloud service operated by End iT or
              any third party. All data remains local to your device unless you explicitly export
              it using the app's backup feature.
            </p>
          </Section>

          <Section title="12. No App Accounts">
            <p>
              The app does not require or offer user accounts, registration, or login credentials
              managed by End iT. There is no End iT account associated with app usage.
            </p>
          </Section>

          <Section title="13. Backup and Export Files">
            <p>
              The app provides a backup and restore feature that allows you to export your app
              data as a file and import it again later. Please be aware:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                Backup files may contain sensitive operational data including key holder names,
                key records, lock records, audit logs, and other records stored in the app.
              </li>
              <li>
                Backup files are generated and stored entirely by you and under your control.
              </li>
              <li>
                End iT does not receive, store, or have access to your backup files.
              </li>
              <li>
                You and your organisation are responsible for securing backup files, controlling
                access to them, and handling them in accordance with applicable privacy and
                information security requirements.
              </li>
            </ul>
          </Section>

          <Section title="14. Support Communications">
            <p>
              If you contact us by email at{" "}
              <a
                href="mailto:support@endit.com.au"
                className="text-[#fbbf24] underline underline-offset-4"
              >
                support@endit.com.au
              </a>
              , we will only receive the information you choose to include in your message. We use
              support emails solely to respond to your request.
            </p>
            <p>
              Please do not send backup files or operational data from the app in support emails
              unless you have a specific reason and have assessed the sensitivity of the
              information. End iT cannot access your app database remotely, and backup files are
              generally not required for support.
            </p>
          </Section>

          <Section title="15. Children's Privacy">
            <p>
              The app is designed for use by organisations and their authorised employees in
              professional operational settings. The app is not intended for use by children.
            </p>
            <p>
              If you believe a child has used the app or provided personal information through
              support channels, please contact us at{" "}
              <a
                href="mailto:support@endit.com.au"
                className="text-[#fbbf24] underline underline-offset-4"
              >
                support@endit.com.au
              </a>
              .
            </p>
          </Section>

          <Section title="16. Deleting Your Data">
            <p>
              Because End iT does not collect or store your operational data, we cannot delete
              data on your behalf. To remove app data:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                Uninstall the app from your device to remove locally stored data (subject to
                your device and operating system's data deletion behaviour).
              </li>
              <li>
                Delete or securely destroy any backup files you have exported.
              </li>
            </ul>
            <p>
              If you have contacted us by email, you may request deletion of that correspondence
              by emailing{" "}
              <a
                href="mailto:support@endit.com.au"
                className="text-[#fbbf24] underline underline-offset-4"
              >
                support@endit.com.au
              </a>
              .
            </p>
          </Section>

          <Section title="17. Organisational Responsibility">
            <p>
              Pocket Key Manager is a record-keeping tool used by organisations to manage physical
              key operations. If you are deploying the app within an organisation:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                The organisation is responsible for determining the lawful basis for storing
                personal information in the app (such as key holder names).
              </li>
              <li>
                The organisation is responsible for complying with applicable privacy laws in
                respect of data stored locally in the app.
              </li>
              <li>
                End iT does not act as a data processor or data controller in respect of
                operational data stored in the app.
              </li>
            </ul>
          </Section>

          <Section title="18. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The current version will be
              published at{" "}
              <a
                href="https://endit.com.au/privacy"
                className="text-[#fbbf24] underline underline-offset-4"
              >
                https://endit.com.au/privacy
              </a>{" "}
              with the last updated date shown above. We encourage you to review this policy
              periodically.
            </p>
          </Section>

          <Section title="19. Contact Us">
            <p>For privacy-related questions or concerns, please contact:</p>
            <div className="mt-2 rounded border border-[#1e1e1e] bg-[#111] p-4">
              <p className="font-semibold text-[#f5f5f5]">End iT</p>
              <p>
                <a
                  href="mailto:support@endit.com.au"
                  className="text-[#fbbf24] underline underline-offset-4"
                >
                  support@endit.com.au
                </a>
              </p>
              <p>PO Box 1188, South Perth WA 6151, Australia</p>
              <p>
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
