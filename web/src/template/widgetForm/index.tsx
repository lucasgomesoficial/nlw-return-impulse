import { useState } from "react";
import { FeedbackContentStep } from "./components/feedbackContentStep";
import { FeedbackSuccessStep } from "./components/feedbackSuccessStep";
import { FeedbackTypeStep } from "./components/feedbackTypeStep";
import { FeedbackType } from "./types";

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackContentType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a
          href="https://twitter.com/lucasgomesdev"
          className="underline underline-offset-2"
          target="_blank"
        >
          Lucas Gomes
        </a>
      </footer>
    </div>
  );
};
