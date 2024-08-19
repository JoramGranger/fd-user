import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { updateUserData } from "src/Features/users/userSlice"; // Import updateUserData action
import EditProfileInput from "./EditProfileInput";
import s from "./EditProfileInputs.module.scss";

const EditProfileInputs = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth); // Access user from auth slice
  const { username, email, address } = user;
  
  const firstLastUserName = username ? username.split(" ") : ["", ""];
  const [firstName, setFirstName] = useState(firstLastUserName[0]);
  const [lastName, setLastName] = useState(firstLastUserName[1]);
  const [emailOrPhoneState, setEmailOrPhoneState] = useState(email || "");
  const [newPassword, setNewPassword] = useState("");
  const [addressState, setAddress] = useState(address || "");

  const { t } = useTranslation();

  const handleSave = () => {
    const updatedUserData = {
      username: `${firstName} ${lastName}`,
      email: emailOrPhoneState,
      address: addressState,
      password: newPassword,
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
            value: emailOrPhoneState,
            setValue: setEmailOrPhoneState,
            placeholder: "example@gmail.com",
          }}
        />

        <EditProfileInput
          inputData={{
            label: t("inputsLabels.address"),
            name: "address",
            value: addressState,
            setValue: setAddress,
            placeholder: t("inputsPlaceholders.address"),
          }}
        />
      </section>

      <section className={s.passwordInputs}>
        <EditProfileInput
          inputData={{
            type: "password",
            label: t("inputsLabels.passwordChanges"),
            name: "currentPass",
            placeholder: t("inputsPlaceholders.currentPass"),
          }}
        />

        <EditProfileInput
          inputData={{
            type: "password",
            placeholder: t("inputsPlaceholders.newPass"),
            value: newPassword,
            setValue: setNewPassword,
          }}
        />

        <EditProfileInput
          inputData={{
            type: "password",
            placeholder: t("inputsPlaceholders.confirmPass"),
          }}
        />
      </section>

      <button onClick={handleSave} className={s.saveButton}>
        {t("buttons.save")}
      </button>
    </section>
  );
};

export default EditProfileInputs;
