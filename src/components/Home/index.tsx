import React, { ReactElement, useCallback } from "react";
import { useHooks } from "./hooks";
import useRequest from "utils/useRequest";
import { getTrendingRepos } from "api/repos";
import Repo from "components/common/Repo";
import SelectSearch from "react-select-search";
import "styles/dropdown.css";

export default function Home(): ReactElement {
  const {
    since,
    language,
    popular,
    ordinary,
    setLanguage,
    setSince,
    languageKey,
    setLanguageKey,
  } = useHooks();
  const { requestResponse, loading, error } = useRequest(
    useCallback(() => getTrendingRepos(language, since), [since, language])
  );

  if (Object.keys(error).length) {
    return <h3>Error...</h3>;
  }

  return (
    <div className="home-container">
      <div className="header">
        <h3>Trending Repos</h3>
      </div>
      <div className="repos-container">
        {loading ? (
          <h3 className="repos-list">Loading...</h3>
        ) : (
          <div className="repos-list">
            {requestResponse.map((repo) => (
              <Repo {...repo} />
            ))}
          </div>
        )}
        <div className="filter-container">
          <h5>Languages Filter</h5>
          {popular.map((e) => (
            <div
              className={`language ${
                language === e.urlParam ? "selected" : ""
              }`}
              onClick={() => {
                setLanguage(e.urlParam);
                setLanguageKey(+new Date());
              }}
            >
              {e.name}
            </div>
          ))}
          <SelectSearch
            options={ordinary}
            search
            placeholder="Select a Language"
            onChange={(val) => setLanguage(val)}
            key={languageKey}
          />
        </div>
      </div>
    </div>
  );
}
