export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {Object.keys(options).map((option, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};
