async function UsersDate() {
    console.log("Users Data will be start hear")
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const users = await response.json();
        
        console.log("Waxa aad si sax ah aad u heshay Users Data:");
        
    } catch (error) {
        console.error("Laguma guulaysan inad hesho Data users:", error.message);
    }
}
UsersDate();