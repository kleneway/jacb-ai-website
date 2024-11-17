import React from 'react';

const WhyJacobComponent = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-md">
      <p>
        First, use this information to determine if this issue is for creating a new file or editing an existing file. It is CRITICAL that you do this BEFORE proceeding with any other steps.
        It is critical that the body is a copy of ALL of the information from the issue, including all markdown formatting, code, examples, etc.
        If the issue is a task to create a single new file, the title MUST be in the following format: "Create new file =&gt; /path/to/file/new_filename.ext".
        Your output MUST be in the format of a JSON object with the title and description fields that adheres to the IssueSchema.
      </p>
    </div>
  );
};

export default WhyJacobComponent;
