function normilize(){
    console.log(this.coords.map(n => {
        return n  / this.length;
    }));
}
normilize.call({coords: [0, 2, 3],  length: 5});