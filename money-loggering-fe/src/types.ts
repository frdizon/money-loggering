export type TUserToken = string | undefined;

export interface IUserContextValue {
  userToken: TUserToken;
  onSetUserToken: (id: TUserToken) => void;
}
