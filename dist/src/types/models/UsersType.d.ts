export interface UsersSchema {
    username: string;
    password?: string;
    email: string;
    aboutMe: string;
    lastname?: string | null;
    surname?: string | null;
}
