export interface UsersSchema {
    username: string;
    password: string;
    email: string;
    aboutMe: string;
    name?: string | null;
    surname?: string | null;
}
