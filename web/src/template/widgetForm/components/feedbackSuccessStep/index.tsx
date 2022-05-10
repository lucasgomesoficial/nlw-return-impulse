import { CloseButton } from "../../../../components/closeButton";
import { successStep } from "./config";
import { FeedbackSuccessStepProps } from "./types";

export const FeedbackSuccessStep = ({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successStep.IMAGE.SOURCE} alt={successStep.IMAGE.ALT} />
        <span className="text-xl mt-2" role="status">
          {successStep.TITLE}
        </span>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          {successStep.BUTTON}
        </button>
      </div>
    </>
  );
};
