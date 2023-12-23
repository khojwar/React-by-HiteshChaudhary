// NOTE: authentication ko laagi appwrite use gariraako xa bhane. future maa jahile pani yo file laai copy-pest gardaa hunxa.

import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // signup
    async createAccount(email, password, name) {
        try {
            const userAccount =  await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login(email, password);

            }else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    // login
    async login(email, password) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Get the currently logged in user.
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite servie :: getCurrentUser :: error", error);
        }

        return null;
    }

    // logout
    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error: ", error);
        }
    }
}




const authService = new AuthService();      // object of AuthService class

export default authService;                // export authService object