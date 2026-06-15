import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteHeader } from "../../../components/SiteHeader";
import { SiteFooter } from "../../../components/SiteFooter";

export const Route = createFileRoute("/apps/pocket-key-manager/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — Pocket Key Manager — End iT" },
      {
        name: "description",
        content:
          "Terms of Use for Pocket Key Manager by End iT. Understand your responsibilities and End iT's limitations as a local, offline-first app.",
      },
      {
        property: "og:title",
        content: "Terms of Use — Pocket Key Manager — End iT",
      },
      {
        property: "og:description",
        content: "Terms of Use for Pocket Key Manager by End iT.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: "https://endit.com.au/apps/pocket-key-manager/terms",
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://endit.com.au/apps/pocket-key-manager/terms",
      },
    ],
  }),
  component: PKMTermsPage,
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

const termsLink = (
  <a
    href="https://endit.com.au/apps/pocket-key-manager/terms"
    className="text-[#fbbf24] underline underline-offset-4"
  >
    https://endit.com.au/apps/pocket-key-manager/terms
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

function PKMTermsPage() {
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
              Terms URL:{" "}
              <a
                href="https://endit.com.au/apps/pocket-key-manager/terms"
                className="text-[#fbbf24]/70 underline underline-offset-4"
              >
                https://endit.com.au/apps/pocket-key-manager/terms
              </a>
            </p>
            <p>Support: {emailLink}</p>
            <p>Postal address: PO Box 1188, South Perth WA 6151, Australia</p>
            <p>Last updated: 15 June 2026</p>
          </div>
        </div>

        <div className="space-y-10">
          <Section title="1. Introduction">
            <p>
              These Terms of Use apply to the Pocket Key Manager mobile app published by End iT.
            </p>
            <p>
              By downloading, installing, accessing, or using Pocket Key Manager, you agree to
              these Terms.
            </p>
            <p>
              If you are using the app on behalf of an organisation, you confirm that you are
              authorised to use the app for that organisation.
            </p>
            <p>If you do not agree to these Terms, do not use the app.</p>
          </Section>

          <Section title="2. About Pocket Key Manager">
            <p>
              Pocket Key Manager is an offline-first mobile app for managing records relating to
              physical keys in mining, industrial, workplace, and organisational environments.
            </p>
            <p>The app may be used to record and manage:</p>
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
            <p>The app is a record-keeping and workflow tool.</p>
            <p>
              It does not physically secure keys, prevent unauthorised physical access, replace
              locks, replace access-control hardware, replace workplace supervision, or guarantee
              compliance with workplace security procedures.
            </p>
          </Section>

          <Section title="3. Business and organisational use">
            <p>
              Pocket Key Manager is intended for business, workplace, industrial, mining, and
              organisational use.
            </p>
            <p>
              You and your organisation are responsible for deciding whether the app is suitable
              for your operational, legal, security, privacy, workplace, safety, audit, and
              record-keeping requirements.
            </p>
            <p>
              You are responsible for ensuring that only authorised users access the app and that
              the app is used in accordance with your organisation's policies.
            </p>
          </Section>

          <Section title="4. Local-only app model">
            <p>
              Pocket Key Manager is designed to operate offline and locally on the device.
            </p>
            <p>End iT does not operate a backend server for the app.</p>
            <p>End iT does not:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>host your app database;</li>
              <li>cloud sync your data;</li>
              <li>provide user accounts;</li>
              <li>remotely administer your records;</li>
              <li>remotely access your operational data;</li>
              <li>remotely recover deleted records;</li>
              <li>remotely delete local records;</li>
              <li>provide server-side data processing.</li>
            </ul>
            <p>
              Because the app data is local, End iT cannot recover lost local data, restore
              deleted records, access your app database, reset your local operational records, or
              remotely remove information from your device.
            </p>
          </Section>

          <Section title="5. Your data and responsibility">
            <p>
              You or your organisation own and control the operational data entered into Pocket Key
              Manager.
            </p>
            <p>You are responsible for:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>the accuracy of records entered into the app;</li>
              <li>deciding what information may be recorded;</li>
              <li>ensuring users are authorised to enter or view information;</li>
              <li>
                complying with workplace, privacy, employment, safety, security, and industry
                obligations;
              </li>
              <li>securing devices where the app is installed;</li>
              <li>managing backup files safely;</li>
              <li>reviewing audit logs and key-control records as required;</li>
              <li>training staff or users who rely on the app;</li>
              <li>deciding whether the app is appropriate for your workplace processes.</li>
            </ul>
            <p>
              End iT is not responsible for incorrect, incomplete, outdated, unauthorised, or
              unlawful data entered by users or organisations.
            </p>
          </Section>

          <Section title="6. PIN and biometric unlock">
            <p>
              Pocket Key Manager may include local access protection features such as PIN unlock
              and biometric unlock.
            </p>
            <p>
              These features are intended to reduce casual or unauthorised local access to the app.
            </p>
            <p>They do not replace:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>physical key-control procedures;</li>
              <li>device management policies;</li>
              <li>staff authorisation checks;</li>
              <li>workplace security policies;</li>
              <li>access reviews;</li>
              <li>incident reporting;</li>
              <li>audit procedures;</li>
              <li>safety procedures;</li>
              <li>legal or compliance obligations.</li>
            </ul>
            <p>
              Your organisation should continue to maintain appropriate operational controls
              outside the app.
            </p>
          </Section>

          <Section title="7. Backups, exports, imports, and restores">
            <p>
              Pocket Key Manager may allow users to export, import, share, or restore backup files.
            </p>
            <p>
              Backup files may contain sensitive operational data, including information about:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>keys;</li>
              <li>locks;</li>
              <li>lock access;</li>
              <li>key holders;</li>
              <li>bookings;</li>
              <li>audit logs;</li>
              <li>issue history;</li>
              <li>return history;</li>
              <li>damaged keys;</li>
              <li>lost keys;</li>
              <li>recovered keys;</li>
              <li>repaired keys;</li>
              <li>retired keys.</li>
            </ul>
            <p>You and your organisation are responsible for:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>deciding when backups are created;</li>
              <li>deciding where backups are stored;</li>
              <li>protecting backup files from unauthorised access;</li>
              <li>
                checking whether a backup file is appropriate before importing or restoring it;
              </li>
              <li>
                ensuring backup files are not emailed, uploaded, copied, or shared in breach of
                organisational policy;
              </li>
              <li>securely deleting backup files when they are no longer needed;</li>
              <li>
                keeping backup files available if you need to restore app data later.
              </li>
            </ul>
            <p>
              End iT is not responsible for backup files that you export, share, store, email,
              upload, lose, corrupt, overwrite, delete, import, or restore.
            </p>
          </Section>

          <Section title="8. No automatic End iT cloud sync or account recovery">
            <p>
              Pocket Key Manager does not provide automatic End iT cloud sync or End iT account
              recovery.
            </p>
            <p>
              If a device is lost, damaged, wiped, replaced, inaccessible, or stolen, app data
              may be lost unless you have created and safely stored a usable backup.
            </p>
            <p>
              You should test your backup and restore procedures before relying on the app in an
              operational setting.
            </p>
          </Section>

          <Section title="9. Operational decisions remain your responsibility">
            <p>
              Pocket Key Manager may help record key-related events, but all operational decisions
              remain the responsibility of the user and organisation.
            </p>
            <p>This includes decisions about:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>issuing keys;</li>
              <li>returning keys;</li>
              <li>approving bookings;</li>
              <li>marking keys as lost;</li>
              <li>marking keys as damaged;</li>
              <li>repairing keys;</li>
              <li>recovering keys;</li>
              <li>retiring keys;</li>
              <li>changing locks;</li>
              <li>investigating incidents;</li>
              <li>reporting security events;</li>
              <li>granting access;</li>
              <li>revoking access;</li>
              <li>reviewing key-control history.</li>
            </ul>
            <p>
              The app should support your key-control process. It should not be the only control
              your organisation relies on.
            </p>
          </Section>

          <Section title="10. Acceptable use">
            <p>You must not use Pocket Key Manager to:</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>break the law;</li>
              <li>record information you are not authorised to record;</li>
              <li>access information you are not authorised to access;</li>
              <li>
                misrepresent key custody, issue, return, loss, damage, repair, recovery, or
                retirement records;
              </li>
              <li>bypass workplace security procedures;</li>
              <li>tamper with audit logs or operational records;</li>
              <li>use the app to conceal security incidents;</li>
              <li>
                reverse engineer, copy, resell, or redistribute the app except where legally
                permitted;
              </li>
              <li>interfere with the app's security or normal operation;</li>
              <li>use the app in a way that could harm End iT, other users, or third parties.</li>
            </ul>
          </Section>

          <Section title="11. No professional advice">
            <p>
              Pocket Key Manager does not provide legal, security, compliance, mining safety,
              workplace safety, employment, audit, insurance, or risk-management advice.
            </p>
            <p>
              You should obtain appropriate professional advice before relying on the app as part
              of a formal compliance, safety, security, audit, or legal framework.
            </p>
          </Section>

          <Section title="12. App updates and changes">
            <p>
              End iT may update, improve, modify, suspend, or discontinue parts of the app from
              time to time.
            </p>
            <p>
              Updates may include bug fixes, security improvements, workflow changes, compatibility
              changes, database changes, user interface changes, or feature changes.
            </p>
            <p>
              You are responsible for deciding whether and when to install updates, subject to
              your app store, device, and organisational policies.
            </p>
            <p>
              Some updates may be required for compatibility, security, or app store availability.
            </p>
          </Section>

          <Section title="13. Third-party platforms and services">
            <p>
              Pocket Key Manager may rely on mobile operating system features and app store
              services, including Android, iOS, file picker, sharing, secure storage, and biometric
              systems.
            </p>
            <p>
              Your use of those platforms and services may also be subject to the terms and privacy
              policies of Apple, Google, device manufacturers, cloud providers, email providers,
              file-sharing services, and other third parties.
            </p>
            <p>
              End iT is not responsible for third-party platforms, devices, operating systems, app
              stores, cloud drives, email services, sharing destinations, storage providers, or
              file managers selected by the user.
            </p>
          </Section>

          <Section title="14. Apple App Store terms">
            <p>
              If you downloaded Pocket Key Manager from the Apple App Store, Apple's terms and
              conditions may also apply.
            </p>
            <p>These Terms are between you and End iT, not Apple.</p>
            <p>
              End iT, not Apple, is responsible for the app and its content, except where Apple's
              own terms or applicable law say otherwise.
            </p>
            <p>Apple has no obligation to provide maintenance or support for the app.</p>
            <p>
              If the app fails to meet an applicable warranty, you may notify Apple, and Apple may
              refund the purchase price if required under its terms. To the maximum extent
              permitted by law, Apple has no other warranty obligation for the app.
            </p>
            <p>
              Apple is not responsible for claims relating to the app or your use of the app,
              including product liability claims, legal compliance claims, consumer protection
              claims, or intellectual property claims, except where required by law.
            </p>
            <p>
              Apple and its subsidiaries are third-party beneficiaries of this section and may
              enforce it against you where applicable.
            </p>
          </Section>

          <Section title="15. Google Play terms">
            <p>
              If you downloaded Pocket Key Manager from Google Play, Google Play's terms and
              policies may also apply.
            </p>
            <p>These Terms are between you and End iT, not Google.</p>
            <p>
              Google is not responsible for providing maintenance, support, refunds, or warranty
              services for the app except as required by Google Play's own terms or applicable law.
            </p>
          </Section>

          <Section title="16. Intellectual property">
            <p>
              Pocket Key Manager, including its software, design, branding, text, workflows, and
              other app materials, is owned by End iT or its licensors.
            </p>
            <p>
              Subject to these Terms, End iT grants you a limited, non-exclusive, non-transferable
              licence to use the app for your own or your organisation's internal purposes.
            </p>
            <p>You do not acquire ownership of the app or End iT's intellectual property.</p>
          </Section>

          <Section title="17. Feedback">
            <p>
              If you provide feedback, ideas, bug reports, or suggestions to End iT, you allow End
              iT to use them to improve the app without obligation to compensate you.
            </p>
            <p>
              You should not include confidential operational data, sensitive backup files,
              personal information, or workplace records in feedback unless you are authorised to
              do so.
            </p>
          </Section>

          <Section title="18. Fees and purchases">
            <p>
              Pocket Key Manager may be offered as a free app, paid app, subscription, or licensed
              product.
            </p>
            <p>
              If the app is offered through the Apple App Store or Google Play, payments, refunds,
              renewals, cancellations, and billing issues may be handled by the relevant app store
              under its own terms.
            </p>
            <p>End iT may introduce, remove, or change paid features in the future.</p>
            <p>Any paid terms will be presented before purchase where required.</p>
          </Section>

          <Section title="19. Privacy">
            <p>
              Your use of Pocket Key Manager is also covered by the Privacy Policy at:{" "}
              {privacyLink}
            </p>
            <p>The app is designed to store operational data locally on the device.</p>
            <p>
              End iT does not collect, receive, access, sell, analyse, track, or transmit the
              operational data entered into the app unless you choose to send information to End
              iT, such as through a support request.
            </p>
          </Section>

          <Section title="20. Disclaimer">
            <p>
              Pocket Key Manager is provided on an "as is" and "as available" basis.
            </p>
            <p>
              End iT aims to provide a useful and reliable app, but End iT does not guarantee that
              the app will be error-free, uninterrupted, secure against all threats, compatible
              with every device, suitable for every organisation, or compliant with every legal,
              safety, operational, audit, or security requirement.
            </p>
            <p>
              You are responsible for testing the app and deciding whether it is appropriate for
              your use case before relying on it operationally.
            </p>
          </Section>

          <Section title="21. Australian consumer rights">
            <p>
              Nothing in these Terms excludes, restricts, or modifies any consumer guarantee,
              right, remedy, or protection that cannot be excluded, restricted, or modified under
              Australian Consumer Law or other applicable law.
            </p>
            <p>
              Where End iT is allowed to limit liability, End iT's liability is limited to the
              maximum extent permitted by law.
            </p>
          </Section>

          <Section title="22. Limitation of liability">
            <p>
              To the maximum extent permitted by law, End iT is not liable for loss, damage, cost,
              or expense arising from:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>incorrect data entered into the app;</li>
              <li>incomplete or outdated records;</li>
              <li>unauthorised access to a device;</li>
              <li>lost, deleted, corrupted, overwritten, or inaccessible local data;</li>
              <li>lost, exposed, corrupted, or unauthorised backup files;</li>
              <li>operational decisions made using app records;</li>
              <li>failure to follow organisational key-control procedures;</li>
              <li>failure to follow workplace safety or security procedures;</li>
              <li>device failure;</li>
              <li>operating system issues;</li>
              <li>app store issues;</li>
              <li>
                third-party file sharing, email, storage, messaging, or cloud services;
              </li>
              <li>use of the app in breach of these Terms;</li>
              <li>
                use of the app in a way that is not suitable for the organisation's requirements.
              </li>
            </ul>
            <p>
              Nothing in these Terms excludes liability that cannot be excluded under applicable
              law.
            </p>
          </Section>

          <Section title="23. Indemnity">
            <p>
              If you use Pocket Key Manager on behalf of an organisation, your organisation is
              responsible for its use of the app, the data entered into it, and the way users
              manage devices and backup files.
            </p>
            <p>
              To the extent permitted by law, you agree to protect End iT from claims, losses,
              liabilities, costs, and expenses arising from:
            </p>
            <ul className="ml-4 list-disc space-y-1">
              <li>your unlawful use of the app;</li>
              <li>unauthorised data entry;</li>
              <li>misuse of backup files;</li>
              <li>breach of these Terms;</li>
              <li>breach of workplace policies;</li>
              <li>breach of third-party rights;</li>
              <li>operational decisions made using app records.</li>
            </ul>
          </Section>

          <Section title="24. Termination">
            <p>You may stop using Pocket Key Manager at any time.</p>
            <p>
              End iT may suspend or stop providing the app if necessary, including for legal,
              security, operational, business, or app store reasons.
            </p>
            <p>Uninstalling the app may delete local app data from the device.</p>
            <p>
              You should export any required backup before uninstalling, subject to your
              organisation's policies.
            </p>
          </Section>

          <Section title="25. Governing law">
            <p>
              These Terms are governed by the laws of Western Australia, Australia.
            </p>
            <p>
              Any disputes will be handled by the courts and tribunals of Western Australia,
              Australia, unless applicable law requires otherwise.
            </p>
          </Section>

          <Section title="26. Changes to these Terms">
            <p>End iT may update these Terms from time to time.</p>
            <p>The updated version will be published at: {termsLink}</p>
            <p>
              Continued use of the app after updated Terms are published means the updated Terms
              apply from the date stated in the Terms.
            </p>
          </Section>

          <Section title="27. Contact">
            <p>For support or questions about these Terms, contact:</p>
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
