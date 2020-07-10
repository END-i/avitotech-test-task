import React from "react";

import { Dashboard } from "components";
import { Provider } from "common/context";

export default function () {
  return (
    <Provider>
      <Dashboard />
    </Provider>
  );
}
