import { nanoid } from "nanoid";
import { motion } from "framer-motion";
function Form({
  details,
  toggled,
  isToggled,
  tableDetails,
  isMainDetail,
  clearForm,
}) {
  function yourDetails(e) {
    const { name, value } = e.target;
    isMainDetail({
      ...details,
      [name]: value,
    });
  }
  return (
    <motion.div
      initial={{ y: "-100vw" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className="absolute top-0 right-0 left-0 bottom-0 w-screen h-screen bg-zinc-500/50 backdrop-blur-sm flex justify-center items-center"
    >
      <form
        onSubmit={(e) => {
          e.preventDefault(), tableDetails(), isToggled(!toggled), clearForm();
        }}
        className="w-[320px] h-[450px] bg-white rounded-md px-5 py-3.5 space-y-3"
      >
        <h1 className="text-purple-600 font-bold text-2xl text-center">
          PERSONAL INFO
        </h1>
        <input
          type="text"
          value={details.name}
          required
          placeholder="Name"
          onChange={yourDetails}
          name="name"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <input
          type="number"
          value={details.age}
          required
          placeholder="Age"
          onChange={yourDetails}
          name="age"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <input
          type="address"
          value={details.address}
          required
          placeholder="Address"
          onChange={yourDetails}
          name="address"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <select
          value={details.gender}
          name="gender"
          onChange={yourDetails}
          className="w-1/2 p-2 border-2 border-zinc-500"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="date"
          value={details.birthdate}
          required
          placeholder="Birthdate"
          onChange={yourDetails}
          name="birthdate"
          className="border-2 border-zinc-500 rounded-sm p-2 w-full"
        />
        <div className="py-4 w-full flex justify-center">
          <button
            type="submit"
            className="px-20 py-2 rounded-sm bg-blue-600 text-white"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Form;
