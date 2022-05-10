import { ArrowLeft } from "phosphor-react";
import { useState } from "react";
import { CloseButton } from "../../../../components/closeButton";
import { feedbackTypes } from "../../config";
import { FormFeedbackContent } from "./form";
import { FeedbackContentStepProps } from "./types";

export const FeedbackContentStep = ({
  feedbackContentType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState("");

  const feedbackContentInfo = feedbackTypes[feedbackContentType];

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
          title="Voltar"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackContentInfo.image.source}
            alt={feedbackContentInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackContentInfo.title}
        </span>
        <CloseButton />
      </header>
      <FormFeedbackContent
        screenshot={screenshot}
        onScreenshotTaken={setScreenshot}
        comment={comment}
        handleComment={setComment}
        onFeedbackSent={onFeedbackSent}
        feedbackType={feedbackContentType}
      />
    </>
  );
};
