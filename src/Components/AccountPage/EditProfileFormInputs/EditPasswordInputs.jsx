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