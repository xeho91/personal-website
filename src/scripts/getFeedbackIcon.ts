import type { FeedbackType } from "$types/Feedback";
import type { IconifyIcon } from "$types/IconifyIcon";

import iconError from "@iconify-icons/carbon/error-filled.js";
import iconInfo from "@iconify-icons/carbon/information-square-filled.js";
import iconNormal from "@iconify-icons/carbon/notification-filled.js";
import iconSuccess from "@iconify-icons/carbon/checkmark-filled.js";
import iconWarning from "@iconify-icons/carbon/warning-alt-filled.js";

const icons = {
	error: iconError,
	info: iconInfo,
	normal: iconNormal,
	success: iconSuccess,
	warning: iconWarning,
};

/** Return the icon designated for the specified feedback type */
export default function getFeedbackIcon(type: FeedbackType): IconifyIcon {
	return icons[type];
}
