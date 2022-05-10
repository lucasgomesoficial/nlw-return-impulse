import { FormEvent, useState } from "react";
import { Loading } from "../../../../components/loading";
import { api } from "../../../../services/api";
import { ScreenshotButton } from "./screenshotButton";
import { FormFeedbackContentProps } from "./types";

export const FormFeedbackContent = ({
  onScreenshotTaken,
  screenshot,
  comment,
  handleComment,
  onFeedbackSent,
  feedbackType,
}: FormFeedbackContentProps) => {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const handleSubmitFeedback = async (event: FormEvent) => {
    event.preventDefault();
    setIsSendingFeedback(true);

    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    }).catch(error => {
      console.log(`Deu Merda: ${error}`);
    });

    onFeedbackSent();
  };

  return (
    <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
      <textarea
        className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
        placeholder="Conte com detalhes o que está acontecendo..."
        onChange={(event) => handleComment(event.target.value)}
      />
      <footer className="flex gap-2 mt-2">
        <ScreenshotButton
          screenshot={screenshot}
          onScreenshotTaken={onScreenshotTaken}
        />
        <button
          type="submit"
          disabled={comment.length === 0 || isSendingFeedback}
          className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          {isSendingFeedback ? <Loading /> : "Enviar feedback"}
        </button>
      </footer>
    </form>
  );
};
