import React from "react";
import { motion } from "framer-motion";
function EditForm({ forEdit, setForEdit, isEditToggled, finishedEdit }) {
  function editDetails(e) {
    const { name, value } = e.target;
    setForEdit({
      ...forEdit,
      [name]: value,
    });
  }
  function submitted() {
    isEditToggled((prevEdit) => !prevEdit);
  }
  return (
    <motion.div
    initial={{ y: "-100vw" }}
    animate={{ y: 0 }}
    transition={{ duration: 0.4 }}
    className="absolute top-0 right-0 left-0 bottom-0 w-screen h-screen bg-zinc-500/50 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault(), submitted(), finishedEdit(forEdit.id);
        }}
        className="w-[320px] h-[450px] bg-white rounded-md px-5 py-3.5 space-y-3"
      >
        <h1 className="text-blue-600 font-bold text-2xl text-center">
          EDIT YOUR INFO
        </h1>
        <input
          type="text"
          value={forEdit.name}
          required
          placeholder="Name"
          onChange={editDetails}
          name="name"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <input
          type="number"
          value={forEdit.age}
          required
          placeholder="Age"
          onChange={editDetails}
          name="age"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <input
          type="address"
          value={forEdit.address}
          required
          placeholder="Address"
          onChange={editDetails}
          name="address"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <select
          value={forEdit.gender}
          name="gender"
          onChange={editDetails}
          className="w-1/2 p-2 border-2 border-zinc-500"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="date"
          value={forEdit.birthdate}
          required
          placeholder="Birthdate"
          onChange={editDetails}
          name="birthdate"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <div className="py-4 w-full flex justify-center">
          <button
            type="submit"
            className="px-20 py-2 rounded-sm bg-blue-600 text-white"
          >
            SAVE
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default EditForm;
