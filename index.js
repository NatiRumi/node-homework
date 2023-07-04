const contacts = require("./contacts");
const { program } = require("commander");

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const allcontacts = await contacts.getContacts();
            console.table(allcontacts);
            break;
        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);  
            break;
        case "add":
            const contact = await contacts.addContact(name, email, phone );
            console.log(contact); 
            break;
        case "remove":
            const deleteContact = await contacts.removeContact(id);
            console.log(deleteContact);
            break;
        default: 
            console.warn('\x1B[31m Unknown action type!');
    }
}

program
    .option("-a, --action, <type>")
    .option("-i, --id, <type>")
    .option("-n, --name, <type>")
    .option("-e, --email, <type>")
    .option("-p, --phone, <type>");

program.parse();

const argv = program.opts();
invokeAction(argv);