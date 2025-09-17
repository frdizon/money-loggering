import { ChangeEvent, FC, useCallback, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { IUser } from "../../types";
import { StyledErrorText, StyledTextField } from "../../styles";
import { useLazyLoginQuery } from "../../../../redux/loginApi";
import { TEXT_INPUT_SLOT_PROPS } from "../../constants";

interface TLoginDialogProps {
  onOpenRegisterDialog?: () => void;
}

const LoginDialog: FC<TLoginDialogProps> = ({ onOpenRegisterDialog }) => {
  const [login, { isFetching, isError }] = useLazyLoginQuery();
  const [formData, setFormData] = useState<IUser>({
    username: "",
    password: "",
  });

  const handleFormChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [e.target.name]: e.target.value,
      }));
    },
    [setFormData]
  );

  const onLoginClick = useCallback(() => {
    login(formData);
  }, [formData, login]);

  return (
    <Dialog open>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        {isError && <StyledErrorText>Invalid Credentials.</StyledErrorText>}
        <StyledTextField
          autoFocus
          fullWidth
          required
          label="Username"
          type="text"
          name="username"
          variant="outlined"
          onChange={handleFormChange}
          autoComplete="off"
          slotProps={TEXT_INPUT_SLOT_PROPS}
        />
        <StyledTextField
          autoFocus
          fullWidth
          required
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          onChange={handleFormChange}
          slotProps={TEXT_INPUT_SLOT_PROPS}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled type="submit" onClick={onOpenRegisterDialog}>
          Register
        </Button>
        <Button
          type="submit"
          variant="contained"
          onClick={onLoginClick}
          loading={isFetching}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
