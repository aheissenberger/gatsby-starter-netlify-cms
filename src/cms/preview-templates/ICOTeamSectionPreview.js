import React from "react";
import { ICOTeamSectionTemplate } from "../../templates/icoteam-section";

const ICOTeamSectionPreview = ({ entry }) => {
    const entryTeam = entry.getIn(["data", "team"]);
  const team = entryTeam ? entryTeam.toJS() : [];
  const entryInvestors = entry.getIn(["data", "investors"]);
  const investors = entryInvestors ? entryInvestors.toJS() : [];
  const entryAdvisoryBoard = entry.getIn(["data", "advisoryboard"]);
  const advisoryboard = entryAdvisoryBoard ? entryAdvisoryBoard.toJS() : [];
  return (
    <ICOTeamSectionTemplate
        team={team}
        investors={investors}
        advisoryboard={advisoryboard}
    />
  );
};

export default ICOTeamSectionPreview;
