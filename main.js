function wait (ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

async function getUserTodoStats() {
    console.log('Початок! ⏰');
    const usersListResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersList = await usersListResponse.json();
    await wait(2000);
    console.log('Завантаження ⏳');
    await wait(500);
    for (const user of usersList) {
        const usersTodoResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`);
        const usersTodo = await usersTodoResponse.json();
        const text = usersTodo[user.id].title;
        console.log(`${user.name} : ${text}`);
    }
}