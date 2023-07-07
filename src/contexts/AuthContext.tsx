import React, { useContext } from 'react';
import { auth } from 'src/lib/firebase';
import {
    sendSignInLinkToEmail,
    User,
    signOut,
    isSignInWithEmailLink,
    signInWithEmailLink,
} from 'firebase/auth';

type AuthContextType = {
    currentUser: User | null;
    sendLoginLink: (email: string) => void;
    logout: () => void;
    handleLoginLink: () => void;
};

export const AuthContext = React.createContext<AuthContextType>({
    currentUser: null,
    sendLoginLink: () => {},
    logout: () => {},
    handleLoginLink: () => {},
});

export function useAuth() {
    return useContext(AuthContext);
}

const actionCodeSettings = {
    // URL to redirect back to - must be in the authorized domains list in the Firebase Console.
    url: 'https://localhost:5173/confirmLogin',
    handleCodeInApp: true,
};

export function AuthProvider({ children }: React.PropsWithChildren) {
    const [currentUser, setCurrentUser] = React.useState<User | null>(
        auth.currentUser
    );

    function sendLoginLink(email: string) {
        sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                // The link was successfully sent. Inform the user!
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorCode, errorMessage });
            });
    }

    function logout() {
        return signOut(auth)
            .then(() => {
                console.log('Sign-out successful.');
            })
            .catch((error) => {
                console.log({ error });
            });
    }

    function handleLoginLink() {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering the sign-in operation.
            // Get the email if available. This should be available if the user completes the flow on the same device where they started it.
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                email =
                    window.prompt(
                        'Please provide your email for confirmation'
                    ) || 'email Invalid';
            }
            // The client SDK will parse the code from the link for you.
            signInWithEmailLink(auth, email, window.location.href)
                .then((result) => {
                    // Clear email from storage.
                    setCurrentUser(result.user);
                    window.localStorage.removeItem('emailForSignIn');
                    // You can access the new user via result.user
                    // Additional user info profile not available via:
                    // result.additionalUserInfo.profile == null
                    // You can check if the user is new or existing:
                    // result.additionalUserInfo.isNewUser
                })
                .catch((error) => {
                    // Some error occurred, you can inspect the code: error.code
                    // Common errors could be invalid email and invalid or expired OTPs.
                    console.log(error);
                });
        }
    }

    const value = {
        currentUser,
        sendLoginLink,
        logout,
        handleLoginLink,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
