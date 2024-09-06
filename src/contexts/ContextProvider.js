import React, { createContext, useContext, useState } from 'react';

/*
useContext hook
为了解决props drilling传递的问题，就是父亲传给孙子组件可能要经过许多中间组件，所以就有了这个hook

1. 创建上下文
const MyContext = React.createContext();

2. 提供上下文
在组件树的上层使用MyContext.Provider来提供一个值给下层组件。
function App() {
  const user = { name: 'Alice', age: 25 };

  return (
    <MyContext.Provider value={user}> //要把上层组件包裹起来
      <Profile />
    </MyContext.Provider>
  );
}

3. 使用上下文，所有的下层组件都可以通过 useContext 访问这个值。
import React, { useContext } from 'react';

function Profile() {
  const user = useContext(MyContext); //调用useContext

  return (
    <div>
      <h1>{user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}
*/

//创建上下文
const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({ children }) => {
    const [ activeMenu, setActiveMenu ] = useState(true);
    const [ isClicked, setIsClicked ] = useState(initialState);
    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, setIsClicked}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)