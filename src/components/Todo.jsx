import React, { useState } from 'react'
const Todo = () => {
    const [showForm, setshowform] =useState(true);
    const [showNew, setshowNew] = useState(true);
    const [showDelete, setshowDelete] = useState(true);
    const [toggleSubmit, settoggleSubmit] = useState(true);
    const [isEditItem, setisEditItem] = useState(null);
    const [showList, setshowList] = useState(true);
    const [editMessage, seteditMessage] = useState(false);
    const [deleteMessage, setdeleteMessage] = useState(false);
    const [deleteMessagesuccess, setdelteMessagesuccess] = useState(false);
    const [inputTitle, setinputTitle] = useState("");
    const [inputDesc, setinputDesc] = useState("");
    const [items, setitems] = useState([
  
    ]);

    //handle input fields
    const handleInputTitle = (e) => {
        setinputTitle(e.target.value);
    };
    const handleInputdesc = (e) => {
        setinputDesc(e.target.value);
    };

    //sumbit form
    const handleSumbit = (e) => {
        setshowList(true);
        setshowNew(true);

        e.preventDefault();
        if (!inputTitle || !inputDesc){
            alert("fill data");
            showList(false);
        } else if (inputTitle && !toggleSubmit) {
            setitems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputTitle, desc: inputDesc };
                    }
                    return elem;
                })
            );
            
            setinputTitle("");
            setinputDesc("");
            settoggleSubmit(true);
            setshowform(false);
            setshowDelete(true);
        }
        else{
            const allInputTitle = {
                id: new Date().getTime().toString(),
                name: inputTitle,
                desc: inputDesc,
            };
            setitems([allInputTitle, ...items]);
            setinputTitle("");
            setinputDesc("");
            setshowform(false);
        }
    };

    //delete
    const handleDelete = (index) => {
        console.log(index);
        const updatedItems = items.filter((elem) => {
            return index !== elem.id;
        });
        setdeleteMessage(true);

        setTimeout(() => {
            setitems(updatedItems);
            setdeleteMessage(false);
        }, 2000);
        setdelteMessagesuccess(false);
    };

    //edit
    const handleEdit = (id) => {
        setshowList(false);
        setshowDelete(false);
        setshowNew(false);
        setshowform(true);

        settoggleSubmit(false);
        let newEditItem = items.find((elem) => {
            return elem.id === id;
        });
        setinputTitle(newEditItem.name);
        setinputDesc(newEditItem.desc);

        setisEditItem(id);
        console.log(newEditItem);
    };

    //add task
    const handleAdd = () => {
        setshowform(true);
        setshowList(true);
        setshowNew(false);
    };

    return (
    <>
    {showNew ? (
    <div className='container'>
        <div className='col-12 text-end'>
            <button className='btn btn-primary' onClick={handleAdd}>
                Add New Task
            </button>
        </div>
    </div>
    ) : (
        ""
    )}
    
    {showForm ? (
        <>
    <div className='container border rounded d-flex justify-contrnt-center shadow p-3 mb-5 bg-white rounded'>
        <div className='row'>
            <div className='text-center'>
                <h2>{toggleSubmit ? "Add Task" : "Edit Task"}</h2>
            </div>
            <form className='col-12 p-2' onSubmit={handleSumbit}>
                <label htmlFor='title' className='my-2'>
                    Enter Task Title
                </label>
                <input
                type="text"
                name="title"
                id="title"
                placeholder="Task Title"
                className="w-100 my-1 p-2"
                onChange={handleInputTitle}
                value={inputTitle}
                />
                <label htmlFor='description' className='my-2'>
                    Enter Description 
                </label>
                <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                className="w-100 my-1 p-2"
                onChange={handleInputdesc}
                value={inputDesc}
                />
            {toggleSubmit ? (
                <button className='btn btn-primary my-2'>Save</button>
            ) : (
                <button className='btn btn-primary my-2'>Update</button>
            )}
                </form>
        </div>
    </div>
    </>
    ) : (
        ""
    )}

    {showList ? (
        <div className='container py-2 '>
            {deleteMessage ? (
                <p className='text-center text-danger'> Task Deleted Successfully</p>
            ) : (
                ""
            )}
            {items.map((elem, index) => {
                return (
                    <div 
                    className='row border rounded shadow p-3 mb-2 bg-white rounded p-2'
                    key={elem.id}
                    >
                        <div className='col-12 d-flex justify-content-between align-items-center'>
                            <div>
                                <h4>{elem.name}</h4>
                                <p>{elem.desc}</p>
                            </div>
                            <button className='btn btn-primary mx-2' onClick={() => handleEdit(elem.id)}>
                            Edit
                            </button>
                            {showDelete ? (
                                <button className='btn btn-danger mx-2' onClick={() => handleDelete(elem.id)}>
                                Delete
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                        </div>
                );
            })}
        </div>
    ) : (
        ""
    )}
    </>
    );
};

export default Todo