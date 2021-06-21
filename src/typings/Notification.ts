import type { FeedbackType } from "./Feedback";

export type NotificationPosition =
	| "top-left"
	| "top-center"
	| "top-right"
	| "bottom-left"
	| "bottom-center"
	| "bottom-right";

export interface Notification {
	id?: string;
	type?: FeedbackType;
	position: NotificationPosition;
	text: string;
	removeAfter?: number;
}
