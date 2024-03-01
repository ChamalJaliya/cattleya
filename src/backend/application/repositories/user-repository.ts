import { User } from "@/backend/domain/entities/user";


export interface UserRepository { 
  create(user: User): Promise<User>;

}

