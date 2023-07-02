const contacts = require("./contacts");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "read":
            const allcontacts = await contacts.listContacts();
            return console.log(allcontacts);
        case "getById":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);  
        case "add":
            const contact = await contacts.addContact(name, email, phone );
            return console.log(contact); 
        case "deleteById":
            const deleteContact = await contacts.removeContact(id);
            return console.log(deleteContact);
        default: 
            return console.log("Unknown action")
    }
}

// invokeAction({action: "read"})
// invokeAction({action: "getById", id: "rsKkOQUi80UsgVPCcLZZW"})
// invokeAction({action: "add", name: "papa", email: "fhghd@mail.com", phone: "552455555"})
// invokeAction({action: "deleteById", id: "AeHIrLTr6JkxGE6SN-0Rw"})