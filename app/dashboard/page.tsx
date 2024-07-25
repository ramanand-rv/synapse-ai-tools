"use client";
import React, { useState } from "react";
import SearchSection from "./_component/SearchSection";
import TemplateListSection from "./_component/TemplateListSection";

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>();

  return (
    <div>
      {/* Search Section */}
      <SearchSection
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />

      {/* Template Section */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
};

export default Dashboard;
