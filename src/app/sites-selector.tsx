"use client";

import { useState } from "react";

type Site = {
  description: string;
  name: string;
  url: string;
};

type SitesSelectorProps = {
  sites: Site[];
};

export function SitesSelector({ sites }: SitesSelectorProps) {
  const [selectedUrl, setSelectedUrl] = useState(sites[0]?.url ?? "");
  const selectedSite = sites.find((site) => site.url === selectedUrl);

  return (
    <div className="rounded-[2rem] border border-[#201916]/10 bg-white p-6 shadow-sm">
      <label
        className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8c5a3c]"
        htmlFor="site-selector"
      >
        Selecionar site
      </label>
      <select
        className="mt-4 w-full rounded-2xl border border-[#201916]/15 bg-[#f6f2ec] px-4 py-3 text-base font-medium text-[#201916] outline-none transition focus:border-[#8c5a3c]"
        id="site-selector"
        onChange={(event) => setSelectedUrl(event.target.value)}
        value={selectedUrl}
      >
        {sites.map((site) => (
          <option key={site.url} value={site.url}>
            {site.name}
          </option>
        ))}
      </select>

      {selectedSite ? (
        <div className="mt-5 rounded-2xl bg-[#f6f2ec] p-5">
          <p className="font-semibold">{selectedSite.name}</p>
          <p className="mt-2 text-sm leading-6 text-[#5f514a]">
            {selectedSite.description}
          </p>
          <a
            className="mt-5 inline-flex rounded-full bg-[#201916] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#3a2d27]"
            href={selectedSite.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Abrir site
          </a>
        </div>
      ) : null}
    </div>
  );
}
