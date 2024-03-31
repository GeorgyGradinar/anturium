export interface IRegistration {
  login: string | null,
  mail: string | null,
  password: number | null
}

export interface ILogin {
  mail: string | null,
  password: number | null
}
