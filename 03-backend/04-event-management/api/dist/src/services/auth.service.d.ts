import { Role } from "../generated/prisma/enums.js";
interface IUserData {
    name: string;
    email: string;
    password: string;
    role: Role;
}
export declare function create(userData: IUserData): Promise<void>;
export {};
//# sourceMappingURL=auth.service.d.ts.map