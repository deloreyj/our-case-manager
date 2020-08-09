import React from "react";
import NavigationList, {
  NavigationListItem,
} from "../components/NavigationList";

import "../styles/Suspects.css";

interface SuspectsProps {
  suspects: Array<NavigationListItem>;
  onSuspectClick: (clickedSuspect: NavigationListItem) => void;
}

function Suspects({ suspects, onSuspectClick }: SuspectsProps) {
  return (
    <div className="suspect-list-screen">
      <NavigationList
        items={suspects}
        onItemClick={(item) => {
          onSuspectClick(item);
        }}
      />
    </div>
  );
}

export default Suspects;
