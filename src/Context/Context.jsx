import React from 'react';

const SimpleContext=React.createContext({
state:{},
setState:{},
show:{},
unShow:{},
EventHide:()=>{},
EventAdd:()=>{}


});
export default SimpleContext;