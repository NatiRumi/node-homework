const contacts = require("./contacts");

const invokeAction = async ({action, id, title, author}) => {
    switch(action) {
        case "read":
            const allcontacts = await contacts.listContacts();
            return console.log(allcontacts);
        case "getById":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);  
        case "add":
            const contact = await contacts.addContact({ data });
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
invokeAction({action: "add", name: "gfg", email: "fdjfh@mail.com", phone: "(550) 451-7038"})
// invokeAction({action: "deleteById", id: "AeHIrLTr6JkxGE6SN-0Rw"})