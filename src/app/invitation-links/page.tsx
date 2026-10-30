"use client";

import { useState, type FormEvent } from "react";
import { Check, Copy, ExternalLink, Link2 } from "lucide-react";

const invitationUrl =
  "https://anjanaindushawedding.space/homecoming";

type Invitation = {
  name: string;
  url: string;
};

export default function InvitationLinksPage() {
  const [names, setNames] = useState("");
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [copied, setCopied] = useState("");
  const [notice, setNotice] = useState("");

  function generateLinks(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const guestNames = Array.from(
      new Set(
        names
          .split(/\r?\n/)
          .map((name) => name.trim())
          .filter(Boolean),
      ),
    );

    if (guestNames.length === 0) {
      setNotice("Please enter at least one guest name.");
      return;
    }

    if (guestNames.some((name) => name.length > 120)) {
      setNotice("Please keep each guest name within 120 characters.");
      return;
    }

    const links = guestNames.map((name) => {
      const url = new URL(invitationUrl);
      url.searchParams.set("to", name);

      return {
        name,
        url: url.toString(),
      };
    });

    setInvitations(links);
    setCopied("");
    setNotice(
      `${links.length} invitation ${
        links.length === 1 ? "link" : "links"
      } generated.`,
    );
  }

  async function copyText(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setNotice("Copied to clipboard.");
    } catch {
      setNotice(
        "Copy was unavailable. Select the link below and copy it manually.",
      );
    }
  }

  function copyAll() {
    const text = invitations
      .map((invitation) => `${invitation.name}\n${invitation.url}`)
      .join("\n\n");

    void copyText(text, "all");
  }

  return (
    <main className="min-h-screen bg-[#130406] px-4 py-12 text-[#f7eedc] sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c9a44c]">
            Indusha &amp; Anjana
          </p>

          <h1 className="text-3xl font-semibold sm:text-4xl">
            Homecoming invitation links
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#cdb5ba]">
            Enter one guest or family name per line. Generate the
            links, then copy and share each invitation with the
            correct guest.
          </p>
        </div>

        <form
          onSubmit={generateLinks}
          className="rounded-2xl border border-[#c9a44c]/30 bg-[#250914] p-5 sm:p-7"
        >
          <label
            htmlFor="guest-names"
            className="mb-3 block text-sm font-medium text-[#ead8b5]"
          >
            Guest names
          </label>

          <textarea
            id="guest-names"
            value={names}
            onChange={(event) => setNames(event.target.value)}
            required
            rows={8}
            placeholder={
              "Kasun & Family\nNimali & Sahan\nMr. & Mrs. Perera"
            }
            className="
              w-full resize-y rounded-xl border border-[#c9a44c]/30
              bg-[#130406] px-4 py-3 text-base leading-7
              text-[#f7eedc] placeholder:text-[#927d83]
              focus:outline-2 focus:outline-offset-2
              focus:outline-[#c9a44c]
            "
          />

          <button
            type="submit"
            className="
              mt-5 inline-flex min-h-12 items-center justify-center
              gap-2 rounded-xl bg-[#c9a44c] px-6 py-3
              text-sm font-semibold text-[#1b0710]
              hover:bg-[#ddbd68] focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-[#c9a44c]
            "
          >
            <Link2 size={18} aria-hidden="true" />
            Generate invitation links
          </button>

          <p className="mb-0 mt-4 text-xs leading-6 text-[#cdb5ba]">
            Names stay in this page’s memory and are cleared when
            you refresh. Copy your generated links before leaving.
          </p>
        </form>

        <p role="status" className="my-5 text-sm text-[#ead8b5]">
          {notice}
        </p>

        {invitations.length > 0 && (
          <section aria-labelledby="generated-links-heading">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <h2
                id="generated-links-heading"
                className="m-0 text-xl font-semibold"
              >
                Generated invitations ({invitations.length})
              </h2>

              <button
                type="button"
                onClick={copyAll}
                className="
                  inline-flex min-h-11 items-center gap-2 rounded-lg
                  border border-[#c9a44c]/40 px-4 py-2 text-sm
                  text-[#d2b45c] hover:bg-[#c9a44c]/10
                  focus-visible:outline-2 focus-visible:outline-[#c9a44c]
                "
              >
                {copied === "all" ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <Copy size={16} aria-hidden="true" />
                )}
                {copied === "all" ? "Copied all" : "Copy all"}
              </button>
            </div>

            <div className="space-y-4">
              {invitations.map((invitation, index) => (
                <article
                  key={invitation.url}
                  className="rounded-2xl border border-[#c9a44c]/25 bg-[#250914] p-5"
                >
                  <h3 className="m-0 break-words text-lg font-medium text-[#ead8b5]">
                    {invitation.name}
                  </h3>

                  <label
                    htmlFor={`invitation-link-${index}`}
                    className="sr-only"
                  >
                    Invitation link for {invitation.name}
                  </label>

                  <input
                    id={`invitation-link-${index}`}
                    type="text"
                    readOnly
                    value={invitation.url}
                    onFocus={(event) => event.currentTarget.select()}
                    className="
                      mt-3 w-full min-w-0 rounded-lg
                      border border-[#c9a44c]/20 bg-[#130406]
                      px-3 py-3 text-xs text-[#cdb5ba]
                      focus:outline-2 focus:outline-[#c9a44c]
                    "
                  />

                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        void copyText(invitation.url, invitation.url)
                      }
                      className="
                        inline-flex min-h-11 items-center gap-2
                        rounded-lg bg-[#c9a44c] px-4 py-2
                        text-sm font-medium text-[#1b0710]
                        hover:bg-[#ddbd68] focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[#c9a44c]
                      "
                    >
                      {copied === invitation.url ? (
                        <Check size={16} aria-hidden="true" />
                      ) : (
                        <Copy size={16} aria-hidden="true" />
                      )}
                      {copied === invitation.url ? "Copied" : "Copy link"}
                    </button>

                    <a
                      href={invitation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex min-h-11 items-center gap-2
                        rounded-lg border border-[#c9a44c]/40
                        px-4 py-2 text-sm text-[#d2b45c]
                        hover:bg-[#c9a44c]/10
                        focus-visible:outline-2
                        focus-visible:outline-[#c9a44c]
                      "
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                      Preview invitation
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}