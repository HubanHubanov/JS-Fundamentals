let set = new Set([ "jim", 3, 4,  4, 4, 5]);
set.add(6)
set.add(7)

set.add("Ben")

for (el of set) {
    console.log(el);
}

console.log(set);



