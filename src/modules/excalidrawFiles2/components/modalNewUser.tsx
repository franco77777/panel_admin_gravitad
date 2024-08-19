// import { Button, Label, Modal, TextInput } from "flowbite-react";
// import { useState } from "react";

// const ModalNewUser = () =>{

//     const [openModal, setOpenModal] = useState(false);

//     const [newFile, setNewFile] = useState({name:""});
//     const [list, setList] = useState([]);

//     const AddNewFile = () =>{

//         list.push(newFile)
//         setOpenModal(false)

//         console.log("soy new file", newFile);

//       }

//       function onCloseModal() {
//         setOpenModal(false);

//       }
//     return <>
//     <Button onClick={() => setOpenModal(true)} color="purple" className="p-0 w-8 h-full focus:ring-0">
//       <div className=" cursor-pointer  w-8 flex justify-center items-center">

//       <img src="../../public/icons/add.svg" alt="add"  />

//       </div>
//       </Button>
//       <Modal show={openModal} size="md" onClose={onCloseModal} popup className="font-mono">
//         <Modal.Header />
//         <Modal.Body>
//           <div className="space-y-1">
//             <h5>create new user</h5>
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="fullname1" value="full name" />
//               </div>
//               <TextInput
//                 id="fullname1"

//                 onChange={(event) => setNewFile({...newFile,name:event.target.value})}
//                 required
//               />
//             </div>
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="email1" value="email" />
//               </div>

//               <TextInput id="email1" type="text" required
//               onChange={(event) => setNewFile({...newFile,input:event.target.value})} />
//             </div>
//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="user1" value="user" />
//               </div>

//               <TextInput id="user1" type="text" required
//               onChange={(event) => setNewFile({...newFile,input2:event.target.value})} />
//             </div>

//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="role1" value="role" />
//               </div>

//               <TextInput id="role1" type="text" required
//               onChange={(event) => setNewFile({...newFile,inpu3:event.target.value})} />
//             </div>

//             <div>
//               <div className="mb-2 block">
//                 <Label htmlFor="password1" value="password" />
//               </div>

//               <TextInput id="password1" type="password" required
//               onChange={(event) => setNewFile({...newFile,input4:event.target.value})} />
//             </div>

//             <Button onClick={AddNewFile} color="success" className="w-full">create new user</Button>

//           </div>
//         </Modal.Body>
//       </Modal></>
// }

// export default ModalNewUser;
