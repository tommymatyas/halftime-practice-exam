const data = require('./data')

const countCompletedTodos = (todosArr) => {
  let completedTodosCounter = 0;

  /* for (let i = 0; i < todosArr.length; i++) {  
    if (todosArr[i].completed === true) {
      completedTodosCounter++;
    }
  } */

  // todosArr.forEach(todo => (todo.completed) ? completedTodosCounter++ : null);

  return todosArr.filter(todo => todo.completed).length
  
  // return completedTodosCounter;
}
// console.log(countCompletedTodos(data))

const getUniqueUserIds = (todosArr) => {
  const uniqueIds = [];

  todosArr.forEach(todo => (!uniqueIds.includes(todo.userId)) ? uniqueIds.push(todo.userId) : null)

  /* for (let i = 0; i < todosArr.length; i++) {
    const newUserId = todosArr[i].userId;

    // if (!uniqueIds.includes(newUserId)) {
    //   uniqueIds.push(newUserId);
    // } 

    for (let j = 0; j < uniqueIds.length; j++) {
      const currentUserId = uniqueIds[j];

      if (newUserId === currentUserId) {
        break;
      }

      if (j === uniqueIds.length - 1) {
        uniqueIds.push(newUserId);
        break;
      }
    }
  } */

  return uniqueIds.sort((a, b) => a - b);
}

console.log(getUniqueUserIds(data));