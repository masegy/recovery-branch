import React from 'react'


export const UserContext = React.createContext({
    currentUser: null,
    login: () => {},
    register: () => {},
    logout: () => {},
});

export function UserProvider(props) {
    const [currentUser, setCurrentUser] = React.useState(null);
    const [users, setUsers] = React.useState([]);

    const login = (username, password) => {
        const user = users.find((value) => value.username === username);

        if(user){
            if(user.password !== password){
                alert('wrong password');
                return;
            } else{
                setCurrentUser(user);
                alert('Login success');
                
            }
        } else{
            alert('user not found');
        }
    };

    const register = (username, password) => {
        const user = users.find((value) => value.username === username);
        
        if(user){
            alert('User Exist');
            return;
        }
        const newUser = {username, password};
        setUsers([...users, newUser]);
        alert('Register Success');
    };

    const logout = () => {setCurrentUser(null)};

    return(
        <UserContext.Provider value={{currentUser, login, register, logout}}>
            {props.children}
        </UserContext.Provider>
    )
}