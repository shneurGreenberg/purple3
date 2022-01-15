import React, { useState, useCallback } from "react";
import { TopBar, Frame } from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";

export function TopBarExample() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "Log out", icon: ArrowLeftMinor }],
        },
      ]}
      name="Name"
      detail="New user"
      initials="D"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  return (
    <div style={{ height: "110px" }}>
      <Frame topBar={<TopBar userMenu={userMenuMarkup} />} />
    </div>
  );
}
