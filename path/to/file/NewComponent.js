import React from "react";
import "tailwindcss/tailwind.css";

const NewComponent = () => {
  return (
    <div className="p-6 bg-beige text-base-black">
      <h1 className="text-2xl font-bold mb-4">Why Jacob Was Built</h1>
      <p className="text-lg">
        First, use this information to determine if this issue is for creating a new file or editing an existing file. It is CRITICAL that you do this BEFORE proceeding with any other steps.
        It is critical that the body is a copy of ALL of the information from the issue, including all markdown formatting, code, examples, etc.
        If the issue is a task to create a single new file, the title MUST be in the following format: "Create new file =&gt; /path/to/file/new_filename.ext".
        Your output MUST be in the format of a JSON object with the title and description fields that adheres to the IssueSchema.
      </p>
    </div>
  );
};

export default NewComponent;