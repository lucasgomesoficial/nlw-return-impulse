import { FeedbackType } from "../../types";

export type FeedbackTypeStepProps = {
  onFeedbackTypeChanged: (type: FeedbackType) => void
}

export type FeedbackStepType = FeedbackType