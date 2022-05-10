import { FeedbackType } from "../../types";

export type FeedbackContentStepProps = {
  feedbackContentType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
};

export type FormFeedbackContentProps = {
  screenshot: string | null;
  onScreenshotTaken: (screenshot: string | null) => void;
  comment: string;
  handleComment: Function;
  onFeedbackSent: () => void;
  feedbackType: FeedbackType;
};

export type ScreenshotButtonProps = Omit<
  FormFeedbackContentProps,
  "comment" | "handleComment" | "onFeedbackSent" | "feedbackType"
>;
