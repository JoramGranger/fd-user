import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { updateUserData } from "src/Features/users/userSlice"; // Import updateUserData action
import EditProfileInput from "./EditProfileInput";
import s from "./EditProfileInputs.module.scss";

const EditProfileInputs = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Access user from auth slice
  const { name, email, phone, address } = user;
  
  const firstLastUserName = name ? name.split(" ") : ["", ""];
  const [firstName, setFirstName] = useState(firstLastUserName[0]);
  const [lastName, setLastName] = useState(firstLastUserName[1]);
  const [emailState, setEmailState] = useState(email || "");
  const [phoneState, setPhoneState] = useState(phone || "");
  const [newPassword, setNewPassword] = useState("");
  const [addressState, setAddress] = useState(address || "");

  const { t } = useTranslation();

  const handleSave = () => {
    const updatedUserData = {
      name: `${firstName} ${lastName}`,
      email: emailState,
      phone: phoneState,
      /* address: addressState, */
      /* password: newPassword, */
    };

    dispatch(updateUserData(updatedUserData));
  };

  useEffect(() => {
    // Optionally, you could handle side effects or initialization here.
  }, [user]);

  return (
    <section className={s.inputs}>
      <section className={s.wrapper}>
        <EditProfileInput
          inputData={{
            label: t("inputsLabels.firstName"),
            name: "firstName",
            value: firstName,
            setValue: setFirstName,
          }}
        />

        <EditProfileInput
          inputData={{
            label: t("inputsLabels.lastName"),
            name: "lastName",
            value: lastName,
            setValue: setLastName,
          }}
        />
        <EditProfileInput
          inputData={{
            label: t("inputsLabels.email"),
            name: "changeEmail",
            value: emailState,
            setValue: setEmailState,
            placeholder: "example@gmail.com",
          }}
        />
        <EditProfileInput
          inputData={{
            label: "Phone",
            name: "changePhone",
            value: phoneState,
            setValue: setPhoneState,
            placeholder: "0700 000 000",
          }}
        />
        <EditProfileInput
          inputData={{
            label: t("inputsLabels.address"),
            name: "address",
            value: addressState,
            setValue: setAddress,
            placeholder: "Bukoto Street, Plot 6",
          }}
        />
      </section>
      {/* <button onClick={handleSave} className={s.saveButton}>
        {t("buttons.save")}
      </button> */}
    </section>
  );
};

export default EditProfileInputs;
