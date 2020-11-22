import { useState } from "react";
import { Hooks } from "types/home";
import { languages } from "utils/languages";

export const useHooks = (): Hooks => {
  const [repos, setRepos] = useState<Array<object> | null>([]);
  const [language, setLanguage] = useState("");
  const [since, setSince] = useState("");
  const popular = languages.filter((e) => e.imp);
  const ordinary = languages
    .filter((e) => !e.imp)
    .map((e) => {
      return {
        ...e,
        value: e.urlParam,
      };
    });
  const [languageKey, setLanguageKey] = useState(Date.now());

  return {
    repos,
    language,
    since,
    popular,
    ordinary,
    setLanguage,
    setSince,
    languageKey,
    setLanguageKey,
  };
};
