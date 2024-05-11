import React from 'react'

const Usememochild = () => {

    console.log("child componenet rendered");
  return (
    <div>
      
    </div>
  )
}

// export default Usememochild
export const Memook=React.memo(Usememochild)
