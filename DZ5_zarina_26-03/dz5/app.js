function filterBooks(...books){
    console.log(books);
    if( wordBook = books.reduce((a, b)=> a === 'у' || b === 'У')){
    console.log(filterBooks);
    }else{
    console.log('error');
    }
}
filterBooks('Агата и Кристи', 'Три мушкетёра', 'Улитка','Война и мир', 'Вареники', 'Молли')

/*const getAverage = (numbers) => {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const length = numbers.length;
    return sum / length;
};
  
const numbers = [1, 2, 3, 4, 46, 543];
console.log(getAverage(numbers));*/