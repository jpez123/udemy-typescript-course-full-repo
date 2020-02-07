import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedListCollection } from './LinkedListCollection';

const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection);

const charactersCollection = new CharactersCollection('John');
charactersCollection.sort();
console.log(charactersCollection);

const linkedListCollection = new LinkedListCollection();
linkedListCollection.add(500);
linkedListCollection.add(3);
linkedListCollection.add(-5);
linkedListCollection.sort();
linkedListCollection.print();
