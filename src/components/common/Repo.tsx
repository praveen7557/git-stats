import React, { FunctionComponent } from "react";
import { Repo as RepoType } from "types/repo";

const Repo: FunctionComponent<RepoType> = ({
  name,
  author,
  forks,
  language,
  languageColor,
  stars,
  url,
  avatar,
  description,
}) => {
  return (
    <div className="repo-container">
      <div className="header">
        <div className="links">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${avatar})` }}
          ></div>
          <a href={`https://github.com/${author}`}>{author}</a>/
          <a href={url}>{name}</a>
        </div>
        <div className="actions">
          <div className="stars action-icon">{stars}</div>
          <div className="forks action-icon">{forks}</div>
        </div>
      </div>
      <div className="body">
        <div className="description">{description}</div>
        <div className="language">
          <span
            className="icon"
            style={{ backgroundColor: languageColor }}
          ></span>
          <span className="label">{language}</span>
        </div>
      </div>
    </div>
  );
};

export default Repo;
