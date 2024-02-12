import designSystem from "./themeDesygn/designSystem";
import designSystemDark from "./themeDesygn/designSystemDark";
import designSystemCustomer from "./themeDesygn/designSystemCustomer";
import designSystemCustomerDark from "./themeDesygn/designSystemCustomerDark";

import type { IThemes } from "./types/themesTypes";
import { Theme } from "./types/themesTypes";
import { ref } from "vue";

/**
 * The default theme to load
 */
export const DEFAULT_THEME = ref(Theme.DESIGN_SYSTEM_CUSTOMER);

export const themes: IThemes = {
  designSystem,
  designSystemDark,
  designSystemCustomer,
  designSystemCustomerDark,
};
