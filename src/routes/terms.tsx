import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — End iT" },
      {
        name: "description",
        content:
          "Terms of Use for Pocket Key Manager by End iT. Understand your responsibilities and End iT's limitations as a local, offline-first app.",
      },
      { property: "og:title", content: "Terms of Use — End iT" },
      {
        property: "og:description",
        content: "Terms of Use for Pocket Key Manager by End iT.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://endit.com.au/terms" },
    ],
    links: [{ rel: "canonical", href: "https://endit.com.au/terms" }],
  }),
  component: TermsPage,
});

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-bold text-[#f5f5f5]">{title}</h2>
      <div className="space-y-3 text-sm leading-relaxed text-[#f5f5f5]/70">{children}</div>
    </section>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <div className="mb-10 border-b border-[#1e1e1e] pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#fbbf24]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight">Terms of Use</h1>
          <div className="mt-4 space-y-0.5 text-sm text-[#f5f5f5]/45">
            <p>Applies to: Pocket Key Manager</p>
            <p>Publisher: End iT (ABN: 62 445 871 758)</p>
            <p>Website: https://endit.com.au</p>
            <p>Last updated: 15 June 2026</p>
          </div>
        </div>

        <div className="space-y-10">
          <Section title="1. About These Terms">
            <p>
              These Terms of Use ("Terms") govern your use of the Pocket Key Manager mobile
              application ("the app") published by End iT (ABN: 62 445 871 758) ("End iT", "we",
              "our", or "us").
            </p>
            <p>
              By downloading, installing, or using the app, you agree to these Terms. If you do
              not agree, do not use the app.
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

          <Section title="3. What the App Does">
            <p>
              Pocket Key Manager is a record-keeping and workflow tool designed for managing
              physical keys in mining and industrial organisations. It helps organisations record:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Physical key copy records and their current status</li>
              <li>Lock access relationships</li>
              <li>Key holder information</li>
              <li>Bookings for key access</li>
              <li>Key issue and return events</li>
              <li>Key states (active, damaged, lost, recovered, repaired, retired)</li>
              <li>Audit logs</li>
              <li>Backup and restore files</li>
            </ul>
          </Section>

          <Section title="4. What the App Does Not Do">
            <p>
              The app is a software record-keeping tool only. It does not:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Physically secure, lock, or unlock anything</li>
              <li>
                Replace organisational key-control policies, procedures, or physical security
                measures
              </li>
              <li>Guarantee the accuracy or completeness of the records you enter</li>
              <li>
                Provide legal, security, safety, or compliance advice of any kind
              </li>
            </ul>
            <p>
              Your organisation is responsible for establishing and maintaining appropriate
              key-control policies. The app is a tool to assist in recording and managing those
              operations — it does not replace human oversight, physical security controls, or
              organisational governance.
            </p>
          </Section>

          <Section title="5. No End iT Backend">
            <p>
              End iT does not operate a backend server, cloud database, or cloud account system
              for Pocket Key Manager. All app data is stored locally on your device.
            </p>
            <p>This means:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>End iT cannot access, view, modify, or recover your app data</li>
              <li>
                End iT cannot remotely reset your app, your PIN, or any access controls
              </li>
              <li>
                If you lose access to your device or forget your PIN, End iT cannot recover your
                data
              </li>
              <li>
                If you delete the app or lose your device without a backup, your data is
                permanently lost
              </li>
            </ul>
            <p>
              You are responsible for maintaining backups of your app data using the app's
              built-in backup and restore feature.
            </p>
          </Section>

          <Section title="6. Your Responsibilities">
            <p>You and your organisation are responsible for:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Ensuring that information entered into the app is accurate and current</li>
              <li>
                Maintaining the security of your device and preventing unauthorised access to
                the app
              </li>
              <li>
                Creating regular backups of your app data and storing those backups securely
              </li>
              <li>
                Controlling who within your organisation has access to devices running the app
              </li>
              <li>
                Making operational decisions based on information in the app — the app records
                what you enter and does not independently verify physical key locations or access
              </li>
              <li>
                Complying with applicable privacy laws in respect of personal information of key
                holders and other individuals stored in the app
              </li>
            </ul>
          </Section>

          <Section title="7. PIN and Biometric Unlock">
            <p>
              The app includes optional PIN and biometric unlock features to help protect local
              app access. These features:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                Help prevent casual or unauthorised access to the app on a shared or unattended
                device
              </li>
              <li>
                Do not replace device-level security measures (such as screen lock and device
                encryption)
              </li>
              <li>
                Do not replace your organisation's physical key-control policies and procedures
              </li>
            </ul>
            <p>
              If you use biometric unlock, it operates through your device's operating system
              biometric system. The app does not store biometric templates or biometric data.
            </p>
          </Section>

          <Section title="8. Backup and Export Files">
            <p>The app provides a backup and export feature. You should be aware:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                Backup files may contain sensitive operational information including key holder
                names, key records, lock records, audit logs, and other records
              </li>
              <li>
                You are responsible for the security of backup files — including where you store
                them, who can access them, and how they are disposed of
              </li>
              <li>End iT does not receive, store, or have access to your backup files</li>
              <li>
                Backup files are not automatically uploaded to any cloud service by the app
              </li>
            </ul>
          </Section>

          <Section title="9. No Automatic Cloud Sync">
            <p>
              The app does not automatically sync data to any cloud service, End iT server, or
              third-party service. All data remains local to your device unless you explicitly
              export it using the backup and export feature.
            </p>
          </Section>

          <Section title="10. Acceptable Use">
            <p>
              You may use the app only for lawful purposes and in accordance with these Terms.
              You must not:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Use the app for any unlawful purpose or in violation of applicable laws</li>
              <li>
                Use the app to record inaccurate, fraudulent, or misleading information
              </li>
              <li>Attempt to reverse-engineer, decompile, or modify the app</li>
              <li>
                Use the app in a way that violates any applicable privacy laws in respect of the
                personal information of key holders or other individuals recorded in the app
              </li>
            </ul>
          </Section>

          <Section title="11. No Professional Advice">
            <p>
              The app is a software tool and does not provide legal, security, safety, workplace
              health and safety, compliance, or professional advice of any kind. You should
              consult appropriately qualified professionals for advice in those areas.
            </p>
          </Section>

          <Section title="12. App Updates">
            <p>
              End iT may release updates to the app from time to time. Updates may add, change,
              or remove features. We recommend keeping the app updated to receive bug fixes and
              improvements. Continued use of the app after an update constitutes acceptance of
              any changes to the app's functionality.
            </p>
          </Section>

          <Section title="13. Third-Party Platforms">
            <p>
              The app is distributed through third-party platforms including the Apple App Store
              and Google Play. Your use of those platforms is subject to the terms and conditions
              of Apple Inc. and Google LLC respectively. End iT is not responsible for the
              practices of Apple, Google, or any device manufacturer.
            </p>
            <p>
              The app may use operating system features including the device file picker, file
              sharing functionality, and biometric authentication system. These features are
              provided by the device operating system and are subject to the privacy practices of
              the operating system provider and device manufacturer.
            </p>
          </Section>

          <Section title="14. Intellectual Property">
            <p>
              The app, including its design, code, functionality, and all associated intellectual
              property, is owned by End iT. You are granted a limited, non-exclusive,
              non-transferable licence to use the app for your internal operational purposes in
              accordance with these Terms. Nothing in these Terms transfers any ownership of
              intellectual property to you.
            </p>
          </Section>

          <Section title="15. Fees and In-App Purchases">
            <p>
              The app may be offered as a free download or may include paid features,
              subscriptions, or in-app purchases. Where fees apply, details will be presented to
              you clearly at the time of purchase through the applicable app store. All purchases
              are subject to the payment terms of the app store through which the app is
              downloaded.
            </p>
            <p>
              End iT reserves the right to introduce, modify, or remove paid features at any
              time, subject to applicable law and the terms of the applicable app store.
            </p>
          </Section>

          <Section title="16. Australian Consumer Law">
            <p>
              Nothing in these Terms limits any rights you may have under the Australian Consumer
              Law (Schedule 2 of the Competition and Consumer Act 2010 (Cth)) or other applicable
              law that cannot be excluded, restricted, or modified by agreement.
            </p>
            <p>
              To the extent permitted by law, End iT's liability for failure to comply with a
              consumer guarantee (other than a guarantee as to title) is limited to, at End iT's
              option, re-supplying the relevant services or paying the cost of re-supply.
            </p>
          </Section>

          <Section title="17. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, End iT is not liable for:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>
                Any loss, corruption, or inaccessibility of app data stored on your device
              </li>
              <li>Any loss arising from failure to maintain adequate backups</li>
              <li>Any loss arising from device loss, theft, or damage</li>
              <li>
                Any operational decisions made in reliance on information recorded in the app
              </li>
              <li>
                Any indirect, incidental, special, consequential, or punitive damages arising
                from your use of the app
              </li>
            </ul>
            <p>
              This limitation does not apply to the extent excluded by applicable law, including
              the Australian Consumer Law.
            </p>
          </Section>

          <Section title="18. Governing Law">
            <p>
              These Terms are governed by the laws of Western Australia, Australia. You agree to
              submit to the non-exclusive jurisdiction of the courts of Western Australia for any
              disputes arising from these Terms or your use of the app.
            </p>
          </Section>

          <Section title="19. Changes to These Terms">
            <p>
              We may update these Terms from time to time. The current version will be published
              at{" "}
              <a
                href="https://endit.com.au/terms"
                className="text-[#fbbf24] underline underline-offset-4"
              >
                https://endit.com.au/terms
              </a>{" "}
              with the last updated date shown above. Continued use of the app after changes are
              published constitutes acceptance of the updated Terms.
            </p>
          </Section>

          <Section title="20. Contact Us">
            <p>For questions about these Terms, please contact:</p>
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
