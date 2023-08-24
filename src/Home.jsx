import React, { useEffect, useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import EditForm from "./EditForm";
function Main() {
  const [mainDetail, isMainDetail] = useState({
    name: "",
    age: "",
    address: "",
    gender: "Male",
    birthdate: "",
    id: nanoid(),
  });
  const [details, setDetails] = useState(() => JSON.parse(localStorage.getItem("details")) || []);
  const [forEdit, setForEdit] = useState({});
  const [toggled, isToggled] = useState(false);
  const [editToggle, isEditToggled] = useState(false);
  console.log(details);
  function tableDetails() {
    setDetails([mainDetail, ...details]);
  }
  function clearForm() {
    isMainDetail({
      name: "",
      age: "",
      address: "",
      gender: "Male",
      birthdate: "",
      id: nanoid(),
    });
  }
  function editInfo(id) {
    const mapped = details.find((editDetails) => editDetails.id === id);
    setForEdit(mapped);
    isEditToggled((prevToggle) => !prevToggle);
  }
  function finishedEdit(id) {
    const updatedDetails = details.map((finishedDetails) => finishedDetails.id === id ? forEdit : finishedDetails);
     setDetails(updatedDetails);
  }
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);
  return (
    <div className="relative">
      <div className="w-screen flex justify-center pt-6">
        <div className="h-[30rem] overflow-auto">
          <table>
            <caption className="text-2xl font-bold uppercase text-zinc-600 pb-3">
              Personal Information Management System
            </caption>
            <thead>
              <tr>
                <th className="p-2 w-[10rem] bg-purple-400 border-2 uppercase text-sm">
                  Name
                </th>
                <th className="p-2 w-[10rem] bg-purple-400 border-2 uppercase text-sm">
                  Age
                </th>
                <th className="p-2 w-[10rem] bg-purple-400 border-2 uppercase text-sm">
                  Address
                </th>
                <th className="p-2 w-[10rem] bg-purple-400 border-2 uppercase text-sm">
                  Gender
                </th>
                <th className="p-2 w-[10rem] bg-purple-400 border-2 uppercase text-sm">
                  Birth Date
                </th>
              </tr>
            </thead>
            <tbody>
              {details.map((mapping) => (
                  <tr key={mapping.id} className="justify-start">
                    <td className="w-[10rem] text-center p-2">
                      {mapping.name}
                    </td>
                    <td className="w-[10rem] text-center p-2">{mapping.age}</td>
                    <td className="w-[10rem] text-center p-2">
                      {mapping.address}
                    </td>
                    <td className="w-[10rem] text-center p-2">
                      {mapping.gender}
                    </td>
                    <td className="w-[10rem] text-center p-2">
                      {mapping.birthdate}
                    </td>
                    <div className="py-2 w-[70px] flex justify-center items-center">
                      <button
                        onClick={() => {
                          editInfo(mapping.id);
                        }}
                        className="w-1/2 text-xl active:text-blue-600 hover:text-blue-600"
                      >
                        <ion-icon name="create-outline"></ion-icon>
                      </button>
                      <button
                        onClick={() => {
                          setDetails(
                            details.filter(
                              (detailed) => detailed.id !== mapping.id
                            )
                          );
                        }}
                        className="w-1/2 text-xl active:text-red-500 hover:text-red-500"
                      >
                        <ion-icon name="person-remove-outline"></ion-icon>
                      </button>
                    </div>
                  </tr>
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-screen flex justify-center">
        <button
          className="px-10 py-3 bg-blue-600 text-white rounded-sm"
          onClick={() => isToggled(!toggled)}
        >
          ADD YOUR DATA
        </button>
        {toggled && (
          <Form
            details={mainDetail}
            clearForm={clearForm}
            isMainDetail={isMainDetail}
            toggled={toggled}
            isToggled={isToggled}
            tableDetails={tableDetails}
          />
        )}
        {editToggle && (
          <EditForm
            forEdit={forEdit}
            setForEdit={setForEdit}
            isEditToggled={isEditToggled}
            finishedEdit={finishedEdit}
          />
        )}
      </div>
    </div>
  );
}

export default Main;
