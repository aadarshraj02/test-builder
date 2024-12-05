import React, { useState } from "react";

const Comprehension = () => {
  const [questions, setQuestions] = useState([
    {
      id: Date.now(),
      questionText: "",
      options: ["", "", "", ""],
      correctOption: null,
    },
  ]);

  const handleQuestionChange = (id, text) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, questionText: text } : q))
    );
  };

  const handleOptionChange = (id, index, text) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id
          ? {
              ...q,
              options: q.options.map((opt, i) => (i === index ? text : opt)),
            }
          : q
      )
    );
  };

  const handleCorrectOption = (id, index) => {
    setQuestions((prev) =>
      prev.map((q) => (q.id === id ? { ...q, correctOption: index } : q))
    );
  };

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        id: Date.now(),
        questionText: "",
        options: ["", "", "", ""],
        correctOption: null,
      },
    ]);
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  return (
    <div className="min-h-[50vh] border p-5 my-5">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">QUESTION</h2>
        <input
          type="number"
          placeholder="Points?"
          className="border rounded-lg px-3 py-2 w-24 outline-none"
        />
      </div>
      <div className="flex justify-between my-5">
        <textarea
          rows={10}
          className="outline-none border rounded-md w-2/3 p-3"
          placeholder="Enter comprehension text here..."
        />
        <p className="text-sm text-blue-600">Comprehension</p>
      </div>
      {questions.map((question, qIndex) => (
        <div key={question.id} className="border p-4 rounded-md mb-5">
          <div className="flex justify-between items-center">
            <h3 className="text-md font-medium">Question {qIndex + 1}</h3>
            <button
              onClick={() => deleteQuestion(question.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter question..."
            value={question.questionText}
            onChange={(e) => handleQuestionChange(question.id, e.target.value)}
            className="border rounded-md w-full p-2 mt-2 outline-none"
          />
          <div className="mt-4">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  value={option}
                  onChange={(e) =>
                    handleOptionChange(question.id, index, e.target.value)
                  }
                  className="border rounded-md w-1/2 p-2 outline-none"
                />
                <input
                  type="radio"
                  name={`correctOption-${question.id}`}
                  checked={question.correctOption === index}
                  onChange={() => handleCorrectOption(question.id, index)}
                />
                <label>Correct</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={addQuestion}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add New Question
      </button>
    </div>
  );
};

export default Comprehension;
