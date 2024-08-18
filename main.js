import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("shark");
list.append("butterfly");
list.append("lion");

list.insertAt(2, "Uruguay");
console.log(list.toString());
list.removeAt(2);
console.log(list.toString());
