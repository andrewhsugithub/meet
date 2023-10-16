"use client";

import { useState } from "react";
import { Input } from "../ui/input";

const UserMeetingForm = () => {
  const [name, setName] = useState("");

  return (
    <div className="w-full">
      <label htmlFor="name" className="flex items-center gap-4">
        Name:
        <Input
          id="name"
          placeholder="Enter name for meetings (default is your username)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </div>
  );
};

export default UserMeetingForm;
