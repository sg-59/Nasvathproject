import React, { useState } from 'react'

const Signup = () => {

    const [name,setName]=useState('')
    const [sname,setSname]=useState('')
    const [email,setEmail]=useState('')
    const [address,setAddress]=useState('')
    const [password,setPassword]=useState('')
    const [image,setImage]=useState({})
    const [selectedImage, setSelectedImage] = useState(null);
    const formdata=new FormData()

    formdata.append('firstname',name)
    formdata.append('lastname',sname)
    formdata.append('email',email)
    formdata.append('address',address)
    formdata.append('password',password)
    formdata.append('image',image)
   
    function display(e){
        e.preventDefault()

        if (image) {
            const reader = new FileReader();
            reader.onload = () => {
              setSelectedImage(reader.result);
            };
            reader.readAsDataURL(image);
          }
    }

  return (
    <div>
      <form onSubmit={display} encType='multipart/form-data'>
<input type="text"  placeholder='First name' onChange={(e)=>setName(e.target.value)}/>
<input type="text" placeholder='Second name' onChange={(e)=>setSname(e.target.value)}/>
<input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
<input type="text" placeholder='Address' onChange={(e)=>setAddress(e.target.value)}/>
<input type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
<input type="file" accept="image/*" onChange={(e)=>setImage(e.target.files[0])} />
<input type="submit" value={'signup'} />

 </form>
 <img src={selectedImage} alt="Preview" style={{ maxWidth: '100%' }} />
    </div>
  )
}

export default Signup
