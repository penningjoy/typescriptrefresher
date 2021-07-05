interface Collection<T>{
    add(o: T): void;
    remove(o: T): void;
}

// -- type assertion using extends
class List<T extends []> implements Collection<T>{
    private items: T[] = [];
    
    add(o: T): void{
        this.items.push(o);
    }

    remove(o: T): void{
        let index = this.items.indexOf(o);
        if(index > -1){
            this.items.splice(index, 1)
        }
    }
}