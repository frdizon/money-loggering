import { ChangeEvent, FC, useCallback, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import { IUser } from "../../types";
import { StyledErrorText, StyledTextField } from "../../styles";
import useLoginApi from "./utils/useLoginApi";

interface TLoginDialogProps {
  onOpenRegisterDialog?: () => void;
}

const LoginDialog: FC<TLoginDialogProps> = ({ onOpenRegisterDialog }) => {
  const { onLogin, isLoading } = useLoginApi();
  const [formData, setFormData] = useState<IUser>({
    username: "",
    password: "",
  });

  const [isShownError] = useState(false);

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
    onLogin(formData);
  }, [formData, onLogin]);

  return (
    <Dialog open>
      <DialogTitle>Login</DialogTitle>
      <DialogContent>
        {isShownError && (
          <StyledErrorText>Invalid Credentials.</StyledErrorText>
        )}
        <StyledTextField
          autoFocus
          fullWidth
          required
          label="Username"
          type="text"
          name="username"
          variant="standard"
          onChange={handleFormChange}
          autoComplete="off"
        />
        <StyledTextField
          autoFocus
          fullWidth
          required
          label="Password"
          name="password"
          type="password"
          variant="standard"
          onChange={handleFormChange}
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
          loading={isLoading}
        >
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
